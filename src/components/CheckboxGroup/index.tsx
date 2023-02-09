import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import {View} from 'react-native';
import Checkbox, {ICheckboxProps} from '../Checkbox';
import Form, {useFormContext} from '../Form';

type TChildCheckbox = {
  name: string;
  label: string;
  checked?: boolean;
  error?: string;
  hint?: string;
};

export interface ICheckboxGroupProps
  extends Omit<ICheckboxProps, 'value' | 'onChange'> {
  name: string;
  checkboxes: TChildCheckbox[];
  onChange?: (selectedCheckboxes: string[]) => void;
}

interface IChildCheckboxesState {
  [key: string]: boolean;
}

const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  name,
  color,
  checkboxes = [],
  error,
  onChange,
  clearFormValueOnUnmount,
  ...rest
}) => {
  const {
    fieldError,
    fieldValue = [],
    unsetFormValue,
    updateFormValue,
    updateFormTouched,
  } = useFormContext(name);
  const errorMessage = fieldError || error;
  const [childCheckboxes, setChildCheckboxes] = useState<IChildCheckboxesState>(
    checkboxes.reduce(
      (obj, {name: childName, checked}) => ({
        ...obj,
        [childName]: fieldValue.includes(name)
          ? true
          : fieldValue.includes(childName) || checked,
      }),
      {},
    ),
  );
  const styles = useStyles();

  const checkChildValues = (
    checkboxChildObj: IChildCheckboxesState,
    type: 'some' | 'all',
  ) => {
    const checkboxValArr = Object.values(checkboxChildObj);
    if (type === 'some') {
      return checkboxValArr.some(val => val);
    }
    return checkboxValArr.every(val => val);
  };

  const getSelectedCheckboxesArr = (obj: IChildCheckboxesState) =>
    [
      ...(checkChildValues(obj, 'all') ? [name] : []),
      ...Object.entries(obj).map(childVal => {
        if (childVal[1]) {
          return childVal[0];
        }
        return;
      }),
    ].filter(Boolean);

  const setAllChildVal = (val: boolean) =>
    Object.keys(childCheckboxes).reduce(
      (obj, childName) => ({...obj, [childName]: val}),
      {},
    );

  const onChangeWrapper = (newState: IChildCheckboxesState) => {
    const newArrState = getSelectedCheckboxesArr(newState);
    setChildCheckboxes(newState);
    onChange && onChange(newArrState as string[]);
    updateFormValue(name, newArrState);
    updateFormTouched(name, true);
  };

  const handleParentCheckboxChange = () =>
    onChangeWrapper(setAllChildVal(!checkChildValues(childCheckboxes, 'all')));

  const handleChildCheckboxForm = (newFormData: IChildCheckboxesState) => {
    console.log(newFormData);
    onChangeWrapper({...childCheckboxes, ...newFormData});
  };

  useEffect(() => {
    updateFormValue(name, getSelectedCheckboxesArr(childCheckboxes), true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Checkbox
        checked={checkChildValues(childCheckboxes, 'all')}
        indeterminate={
          checkChildValues(childCheckboxes, 'some') &&
          !checkChildValues(childCheckboxes, 'all')
        }
        onChange={handleParentCheckboxChange}
        controlled={true}
        style={styles.parentCheckbox}
        error={errorMessage}
        color={color}
        {...rest}
      />
      <Form initialValues={childCheckboxes} onChange={handleChildCheckboxForm}>
        <View style={styles.childCheckboxContainer}>
          {checkboxes.map(props => (
            <Checkbox
              {...props}
              checked={childCheckboxes[props.name]}
              key={props.name}
              style={styles.childCheckbox}
              color={color}
            />
          ))}
        </View>
      </Form>
    </View>
  );
};

export default CheckboxGroup;
