import { getStorybookUI } from "@storybook/react-native";
import "./storybook.requires";
import 'react-native-gesture-handler';

const StorybookUIRoot = getStorybookUI(__DEV__ ? {} : {initialSelection: {kind: 'Button', name: 'Contained'}});
export default StorybookUIRoot;
