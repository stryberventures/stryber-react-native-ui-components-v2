import React, {useState} from 'react';
import Input, {IInputProps} from '../Input';
import Eye from './Eye';

export interface IPasswordInputProps extends IInputProps {
  newPassword?: boolean;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({
  newPassword,
  disabled,
  ...rest
}) => {
  const [secured, setSecured] = useState(true);

  const handleEyePress = () => setSecured(prevSecured => !prevSecured);

  return (
    <Input
      autoComplete={newPassword ? 'password-new' : 'password'}
      textContentType={newPassword ? 'newPassword' : 'password'}
      secureTextEntry={secured}
      rightContent={
        <Eye secured={secured} disabled={disabled} onPress={handleEyePress} />
      }
      disabled={disabled}
      {...rest}
    />
  );
};

export default PasswordInput;
