import React, {
  useContext,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {isObjectEmpty} from '../../utils';

export interface IFormActions {
  submit: () => void;
  reset: () => void;
  isValid: boolean;
  setErrors: (errors: Record<string, string>) => void;
}

export interface IFormContext {
  updateFormValue: (name: string, data: any, init?: boolean) => void;
  updateFormTouched: (name: string, isTouched: boolean) => void;
  unsetFormValue: (name: any) => void;
  formValues: any;
  formErrors: any;
  formTouched: any;
  initialValues?: any;
  formActions: IFormActions;
}

const defaultFormContextValues: IFormContext = {
  updateFormValue: () => {},
  updateFormTouched: () => {},
  unsetFormValue: () => {},
  formValues: undefined,
  formErrors: undefined,
  formTouched: undefined,
  initialValues: undefined,
  formActions: {
    submit: () => {},
    reset: () => {},
    isValid: true,
    setErrors: () => {},
  },
};

export const FormContext: React.Context<IFormContext> = React.createContext(
  defaultFormContextValues,
);

export interface IFormProps {
  onSubmit?: (formData: any, formActions: IFormActions) => void;
  onReset?: (formData: any) => void;
  onError?: (errorData: any, formData: any) => void;
  onChange?: (newFormData: any, formActions: IFormActions) => void;
  onValidate?: (newFormData: any) => any;
  onValidateAsync?: (newFormData: any) => Promise<any>;
  initialValues?: any;
  validationSchema?: any;
  children?: React.ReactNode;
}

export interface IFormRef extends IFormActions {}

const Form = forwardRef<IFormRef, IFormProps>(
  (
    {
      children,
      onSubmit,
      onReset,
      onChange,
      onError,
      onValidate,
      onValidateAsync,
      validationSchema,
      initialValues,
    },
    ref,
  ) => {
    const [formValues, setFormValues] = useState(initialValues || {});
    const [formErrors, setFormErrors] = useState({});
    const [formTouched, setFormTouched] = useState({});
    // Use to force form rerender with key prop
    const [formSessionId, setFormSessionId] = useState(1);

    const validate = (values: any) => {
      /** Validation schema using Yup library */
      let validationRes = {};
      if (validationSchema) {
        try {
          validationSchema.validateSync(values, {abortEarly: false});
        } catch (errors: any) {
          validationRes = errors.inner.reduce(
            (a: any, v: any) => ({...a, [v.path]: v.message}),
            {},
          );
        }
        setFormErrors(validationRes);

        return validationRes;
      }
      /** External validation methods */
      if (onValidate) {
        setFormErrors(() => onValidate(values));
      }
      if (onValidateAsync) {
        onValidateAsync(values)
          /** No errors from external lib */
          .then(() => setFormErrors({}))
          /** Errors were caught */
          .catch((errors: any) => setFormErrors(errors));
      }
    };

    const onResetFormWrapper = () => {
      setFormValues(() => initialValues || {});
      setFormSessionId(id => id + 1);
      setFormErrors({});
      setFormTouched({});
      onReset && onReset(formValues);
    };

    /** Set everything to "touched" to highlight errors on submit */
    const handleFormTouched = () =>
      setFormTouched(() =>
        Object.keys(formValues).reduce(
          (acc: any, key: string) => ({...acc, [key]: true}),
          {},
        ),
      );

    const setFormErrorsActionWrapper = (errors: any) => {
      handleFormTouched();
      setFormErrors(errors);
      onError && onError(errors, formValues);
    };

    const onSubmitFormWrapper = () => {
      if (Object.keys(formErrors).length > 0) {
        handleFormTouched();
        onError && onError(formErrors, formValues);
      } else {
        onSubmit && onSubmit(formValues, formActions);
      }
    };

    const formActions = {
      isValid: isObjectEmpty(formErrors),
      setErrors: setFormErrorsActionWrapper,
      reset: onResetFormWrapper,
      submit: onSubmitFormWrapper,
    };

    const updateFormValue = (
      name: string,
      value: any,
      init: boolean = false,
    ) => {
      /** Setting new values in state */
      setFormValues((updatedFormValues: any) => {
        const newFormValues = {...updatedFormValues};
        newFormValues[name] = value;

        /** Validating new values */
        const validationResult = validate(newFormValues) || {};
        const isValid = isObjectEmpty(validationResult);

        /** Sending on change callback (if it was provided) */
        !init && onChange && onChange(newFormValues, {...formActions, isValid});

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

    useImperativeHandle(ref, () => formActions);

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
          formActions,
        }}
      >
        {children}
      </FormContext.Provider>
    );
  },
);

export const useFormContext = (fieldName: string = 'unnamed') => {
  const {
    updateFormValue,
    updateFormTouched,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
    formActions,
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
    formActions,
  };
};

export default Form;
