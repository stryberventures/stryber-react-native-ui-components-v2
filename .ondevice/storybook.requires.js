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
    require("../src/components/Chip/Chip.stories.tsx"),
    require("../src/components/Combobox/Combobox.stories.tsx"),
    require("../src/components/Dialog/Dialog.stories.tsx"),
    require("../src/components/Dropdown/Dropdown.stories.tsx"),
    require("../src/components/Elevation/Elevation.stories.tsx"),
    require("../src/components/Form/Form.stories.tsx"),
    require("../src/components/Icons/Icons.stories.tsx"),
    require("../src/components/Input/Input.stories.tsx"),
    require("../src/components/List/List.stories.tsx"),
    require("../src/components/Multiselect/Multiselect.stories.tsx"),
    require("../src/components/NumberInput/NumberInput.stories.tsx"),
    require("../src/components/PasswordInput/PasswordInput.stories.tsx"),
    require("../src/components/RadioButton/RadioButton.stories.tsx"),
    require("../src/components/Select/Select.stories.tsx"),
    require("../src/components/Slider/Slider.stories.tsx"),
    require("../src/components/Switch/Switch.stories.tsx"),
    require("../src/components/Text/Text.stories.tsx"),
    require("../src/components/TextArea/TextArea.stories.tsx"),
    require("../src/components/TextLink/TextLink.stories.tsx"),
    require("../src/components/Theme/Theme.stories.tsx"),
    require("../src/components/Tooltip/Tooltip.stories.tsx"),
  ];
};

configure(getStories, module, false);
