import React, {FC, useContext, useEffect, useState} from 'react';
import * as yup from 'yup';

export interface IFormContext {
  updateFormValue: (name: string, data: any, init?: boolean) => void;
  updateFormTouched: (name: string, data: any) => void;
  unsetFormValue: (name: any) => void;
  formValues: any;
  formErrors: any;
  formTouched: any;
  initialValues?: any;
  handleReset: () => void;
  handleSubmit: (formData?: any) => void;
}

const defaultFormContextValues: IFormContext = {
  updateFormValue: () => {},
  updateFormTouched: () => {},
  unsetFormValue: () => {},
  formValues: undefined,
  formErrors: undefined,
  formTouched: undefined,
  initialValues: undefined,
  handleReset: () => {},
  handleSubmit: () => {},
};

export const FormContext: React.Context<IFormContext> = React.createContext(
  defaultFormContextValues,
);

export interface IFormProps {
  onSubmit?: (formData: any) => void;
  onReset?: (formData: any) => void;
  onError?: (errorData: any, formData: any) => void;
  onChange?: (newFormData: any) => void;
  onValidate?: (newFormData: any) => any;
  onValidateAsync?: (newFormData: any) => Promise<any>;
  initialValues?: any;
  validationSchema?: any;
}

const Form: FC<IFormProps> = ({
  children,
  onSubmit,
  onReset,
  onChange,
  onError,
  onValidate,
  onValidateAsync,
  validationSchema,
  initialValues,
}) => {
  const [formValues, setFormValues] = useState(initialValues || {});
  const [formErrors, setFormErrors] = useState({});
  const [formTouched, setFormTouched] = useState({});
  // Use to force form rerender with key prop
  const [formSessionId, setFormSessionId] = useState(1);

  const validate = (values: any) => {
    /** Validation schema using Yup library */
    if (validationSchema) {
      validationSchema
        .validate(values, {abortEarly: false})
        /** No errors from Yup */
        .then(() => setFormErrors({}))
        /** Errors were caught */
        .catch((errors: yup.ValidationError) => {
          const parsedErrors = errors.inner.reduce(
            (a: any, v: any) => ({...a, [v.path]: v.message}),
            {},
          );
          setFormErrors(() => parsedErrors);
        });
    }
    /** External validation methods */
    if (onValidate) {
      setFormErrors(() => onValidate(values));
    }
    if (onValidateAsync) {
      onValidateAsync(values)
        /** No errors from external lib */
        .then(() => setFormErrors(() => {}))
        /** Errors were caught */
        .catch((errors: any) => setFormErrors(() => errors));
    }
  };

  const updateFormValue = (name: string, value: any, init: boolean = false) => {
    /** Setting new values in state */
    setFormValues((updatedFormValues: any) => {
      const newFormValues = {...updatedFormValues};
      newFormValues[name] = value;

      /** Validating new values */
      validate(newFormValues);

      /** Sending on change callback (if it was provided) */
      !init && onChange && onChange({...newFormValues});

      return newFormValues;
    });
  };

  /** Updating field touched status (needed for a correct error display */
  const updateFormTouched = (name: string, touched: boolean = true) => {
    setFormTouched((updatedFormTouched: any) => {
      const newFormTouched = {...updatedFormTouched};
      newFormTouched[name] = touched;
      setFormTouched(newFormTouched);
    });
  };

  /** Un-setting value (clearing it from the form) */
  const unsetFormValue = (name: string) => {
    updateFormValue(name, undefined);
    updateFormTouched(name, false);
  };

  const onSubmitFormWrapper = () => {
    if (Object.keys(formErrors).length > 0) {
      /** Set everything to "touched" to highlight errors on submit */
      setFormTouched(() =>
        Object.keys(formValues).reduce(
          (acc: any, key: string) => ({...acc, [key]: true}),
          {},
        ),
      );
      onError && onError(formErrors, formValues);
    } else {
      onSubmit && onSubmit(formValues);
    }
  };
  const onResetFormWrapper = () => {
    setFormValues(() => initialValues || {});
    setFormSessionId(id => id + 1);
    onReset && onReset(formValues);
  };

  useEffect(() => {
    /** Running first validation on mount */
    validate(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormContext.Provider
      key={formSessionId}
      value={{
        updateFormValue,
        updateFormTouched,
        unsetFormValue,
        initialValues,
        formValues,
        formErrors,
        formTouched,
        handleSubmit: onSubmitFormWrapper,
        handleReset: onResetFormWrapper,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (fieldName: string = 'unnamed') => {
  const {
    updateFormValue,
    updateFormTouched,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
    handleReset,
    handleSubmit,
  } = useContext(FormContext);

  return {
    fieldError:
      fieldName &&
      formTouched &&
      formTouched[fieldName] &&
      formErrors[fieldName],
    fieldValue: fieldName && formValues && formValues[fieldName],
    updateFormValue: formValues ? updateFormValue : () => {},
    updateFormTouched: formTouched ? updateFormTouched : () => {},
    unsetFormValue: formValues ? unsetFormValue : () => {},
    handleReset,
    handleSubmit,
  };
};

export default Form;