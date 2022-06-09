import {useState} from 'react';
import {IPasswordInputProps} from './index';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

export interface IValidationItemProps {
  label: string;
  rule: RegExp;
}

interface IValidationItemLocal extends IValidationItemProps {
  matched?: boolean;
}

interface IProps
  extends Pick<IPasswordInputProps, 'onValidationChange' | 'validationSchema'> {
  value?: string;
}

export const usePasswordValidation = (props: IProps) => {
  const {validationSchema, value, onValidationChange} = props;

  const validate = (password: string): IValidationItemLocal[] => {
    if (validationSchema) {
      return validationSchema.map(item => ({
        ...item,
        matched: !!password.match(item.rule),
      }));
    }
    return [];
  };

  const [schema, setSchema] = useState<IValidationItemLocal[]>(
    validate(value || ''),
  );

  const onPasswordInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const validatedSchema = validate(e.nativeEvent.text);
    !!validationSchema && setSchema(validatedSchema);
    onValidationChange &&
      onValidationChange(validatedSchema.every(({matched}) => matched));
  };

  return {
    schema,
    onPasswordInputChange,
  };
};
