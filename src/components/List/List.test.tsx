import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';
import List, {IListItem} from '.';
import * as Icons from '../Icons';

const listItemTestID = 'test-list-item';
const leftContentTestID = 'test-left-content';
const rightContentTestID = 'test-right-content';

const onPress = jest.fn();

const listItems: IListItem[] = [
  {
    title: 'One-line Item',
    subtitle: 'Secondary Text',
    leftContent: <Icons.InfoIcon fill="#667085" testID={leftContentTestID} />,
    rightContent: <Text testID={rightContentTestID}>01</Text>,
    testID: listItemTestID,
    onPress,
  },
];

const firstItem = listItems[0];

it('renders title and subtitle', () => {
  const {getByText} = render(<List listItems={listItems} />);
  getByText(firstItem.title);
  getByText(firstItem.subtitle!);
});

it('renders left and right content', () => {
  const {getByTestId} = render(<List listItems={listItems} />);
  getByTestId(leftContentTestID);
  getByTestId(rightContentTestID);
});

it('fires onPress', () => {
  const {getByTestId} = render(<List listItems={listItems} />);
  fireEvent.press(getByTestId(listItemTestID));
  expect(onPress).toHaveBeenCalled();
});
