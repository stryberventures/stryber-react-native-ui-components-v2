import React, {useState} from 'react';
import Switch from '../../components/Switch';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

interface IRtlAddonProps {
  active?: boolean;
}

const RtlAddon: React.FC<IRtlAddonProps> = ({active}) => {
  const [isRTL, setRTL] = useState(I18nManager.isRTL);

  const handleRTL = async (updatedIsRTL: boolean) => {
    await I18nManager.forceRTL(updatedIsRTL);
    setRTL(updatedIsRTL);
    setTimeout(() => {
      RNRestart.Restart();
    }, 200);
  };

  if (!active) {
    return null;
  }

  return (
    <Switch
      controlled
      label="Turn on RTL"
      // @ts-ignore
      onChange={handleRTL}
      checked={isRTL}
      style={{alignSelf: isRTL ? 'flex-end' : 'flex-start'}}
    />
  );
};

export default RtlAddon;
