import * as React from 'react';
import {render} from '@testing-library/react-native';

import Menu, {MenuSearch, MenuItem, MenuItemText} from './index';

const title = 'Menu item';

const ComponentWithMenu = () => (
  <Menu testID="gaia-menu-test">
    <MenuSearch testID="gaia-menu-search" />
    <MenuItem>
      <MenuItemText primary={title} />
    </MenuItem>
  </Menu>
);

it('should be rendered', () => {
  const {getByText} = render(<ComponentWithMenu />);
  getByText(title);
});

it('should be visible', () => {
  const {getByTestId} = render(<ComponentWithMenu />);
  getByTestId('gaia-menu-test');
});

it('should have search', () => {
  const {getByTestId} = render(<ComponentWithMenu />);
  getByTestId('gaia-menu-search');
});
