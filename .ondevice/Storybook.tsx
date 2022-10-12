import { getStorybookUI } from "@storybook/react-native";
import "./storybook.requires";

const StorybookUIRoot = getStorybookUI(__DEV__ ? {} : {initialSelection: {kind: 'Button', name: 'Contained'}});
export default StorybookUIRoot;
