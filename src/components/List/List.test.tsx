import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import List, {ListItem, ListItemText} from './index';
import * as Icons from '../Icons';

const listItemTestID = 'test-list-item';
const leftContentTestID = 'test-left-content';
const rightContentTestID = 'test-right-content';
const onPress = jest.fn();

const firstItem = {
  title: 'One-line Item',
  subtitle: 'Secondary Text',
  leftContent: <Icons.CalendarIcon testID={leftContentTestID} />,
  rightContent: <Icons.InfoIcon testID={rightContentTestID} />,
  testID: listItemTestID,
  onPress,
  size: 'medium',
};

const ComponentWithList = () => (
  <List>
    <ListItem
      rightContent={firstItem.rightContent}
      leftContent={firstItem.leftContent}
      onPress={firstItem.onPress}
      testID={firstItem.testID}>
      <ListItemText primary={firstItem.title} secondary={firstItem.subtitle} />
    </ListItem>
  </List>
);

it('renders title and subtitle', () => {
  const {getByText} = render(<ComponentWithList />);
  getByText(firstItem.title);
  getByText(firstItem.subtitle!);
});

it('renders left and right content', () => {
  const {getByTestId} = render(<ComponentWithList />);
  getByTestId(leftContentTestID);
  getByTestId(rightContentTestID);
});

it('fires onPress', () => {
  const {getByTestId} = render(<ComponentWithList />);
  fireEvent.press(getByTestId(listItemTestID));
  expect(onPress).toHaveBeenCalled();
});
