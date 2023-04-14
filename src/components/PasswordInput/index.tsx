import React, {useState} from 'react';
import Input, {IInputProps} from '../Input';
import Chip from '../Chip';
import {CheckIcon} from '../Icons';
import Eye from './Eye';
import {
  IValidationItemProps,
  usePasswordValidation,
} from './usePasswordValidation';
import {StyleProp, View, ViewStyle} from 'react-native';
import useStyles from './styles';

export interface IPasswordInputProps extends IInputProps {
  newPassword?: boolean;
  validationSchema?: IValidationItemProps[];
  onValidationChange?: (valid: boolean) => void;
  validationContainerStyle?: StyleProp<ViewStyle>;
  chipStyle?: StyleProp<ViewStyle>;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({
  newPassword,
  validationSchema,
  onValidationChange,
  value,
  disabled,
  validationContainerStyle,
  chipStyle,
  ...rest
}) => {
  const [secured, setSecured] = useState(true);
  const {onPasswordInputChange, schema} = usePasswordValidation({
    validationSchema,
    value,
    onValidationChange,
  });
  const styles = useStyles();

  const handleEyePress = () => setSecured(prevSecured => !prevSecured);

  return (
    <>
      <Input
        autoComplete={newPassword ? 'password-new' : 'password'}
        textContentType={newPassword ? 'newPassword' : 'password'}
        secureTextEntry={secured}
        onChange={onPasswordInputChange}
        value={value}
        rightContent={
          <Eye secured={secured} disabled={disabled} onPress={handleEyePress} />
        }
        disabled={disabled}
        {...rest}
      />
      {!!validationSchema && (
        <View style={[styles.validationContainer, validationContainerStyle]}>
          {schema.map(({label, matched}) => (
            <Chip
              key={label}
              color={matched ? 'success' : 'neutralGray'}
              iconLeft={
                matched && <CheckIcon fill="#fff" width={17} height={17} />
              }
              style={[styles.chip, chipStyle]}
            >
              {label}
            </Chip>
          ))}
        </View>
      )}
    </>
  );
};

export default PasswordInput;
