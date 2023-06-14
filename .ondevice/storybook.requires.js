/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "./customAddons/RTLMode/register";
import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

const getStories = () => {
  return [
    require("../src/components/Button/Button.stories.tsx"),
    require("../src/components/Checkbox/Checkbox.stories.tsx"),
    require("../src/components/CheckboxGroup/CheckboxGroup.stories.tsx"),
    require("../src/components/Chip/Chip.stories.tsx"),
    require("../src/components/CircularProgress/CircularProgress.stories.tsx"),
    require("../src/components/Combobox/FloatingLabelCombobox.stories.tsx"),
    require("../src/components/Combobox/LabelOutsideCombobox.stories.tsx"),
    require("../src/components/Dialog/Dialog.stories.tsx"),
    require("../src/components/Divider/Divider.stories.tsx"),
    require("../src/components/Dropdown/FloatingLabelDropdown.stories.tsx"),
    require("../src/components/Dropdown/LabelOutsideDropdown.stories.tsx"),
    require("../src/components/Elevation/Elevation.stories.tsx"),
    require("../src/components/Form/Form.stories.tsx"),
    require("../src/components/Icons/Icons.stories.tsx"),
    require("../src/components/Input/FloatingLabelInput.stories.tsx"),
    require("../src/components/Input/LabelOutsideInput.stories.tsx"),
    require("../src/components/LinearProgress/LinearProgress.stories.tsx"),
    require("../src/components/List/List.stories.tsx"),
    require("../src/components/Multiselect/FloatingLabelMultiselect.stories.tsx"),
    require("../src/components/Multiselect/LabelOutsideMultiselect.stories.tsx"),
    require("../src/components/NumberInput/NumberInputFloatingLabel.stories.tsx"),
    require("../src/components/NumberInput/NumberInputLabelOutside.stories.tsx"),
    require("../src/components/PasswordInput/PasswordInputFloatingLabel.stories.tsx"),
    require("../src/components/PasswordInput/PasswordInputLabelOutside.stories.tsx"),
    require("../src/components/RadioButton/RadioButton.stories.tsx"),
    require("../src/components/SearchInput/SearchInput.stories.tsx"),
    require("../src/components/Select/FloatingLabelSelect.stories.tsx"),
    require("../src/components/Select/LabelOutsideSelect.stories.tsx"),
    require("../src/components/Slider/Slider.stories.tsx"),
    require("../src/components/Switch/Switch.stories.tsx"),
    require("../src/components/Tag/Tag.stories.tsx"),
    require("../src/components/Text/Text.stories.tsx"),
    require("../src/components/TextArea/TextAreaFloatingLabel.stories.tsx"),
    require("../src/components/TextArea/TextAreaLabelOutside.stories.tsx"),
    require("../src/components/TextLink/TextLink.stories.tsx"),
    require("../src/components/Theme/Theme.stories.tsx"),
    require("../src/components/Tooltip/Tooltip.stories.tsx"),
    require("../src/modules/Authentication/ForgotPassword/ForgotPassword.stories.tsx"),
    require("../src/modules/Authentication/Login/Login.stories.tsx"),
    require("../src/modules/Authentication/SignUp/SignUp.stories.tsx"),
    require("../src/modules/Navigation/BottomTabNavigator/BottomTabNavigator.stories.tsx"),
    require("../src/modules/Navigation/SideNavigator/SideNavigator.stories.tsx"),
    require("../src/modules/Navigation/TopTabNavigator/TopTabNavigator.stories.tsx"),
  ];
};

configure(getStories, module, false);
