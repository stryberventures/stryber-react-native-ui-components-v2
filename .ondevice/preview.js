import React from 'react';
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import ThemeDecorator from "../src/storybook/preview/ThemeDecorator";

export const decorators = [
    withBackgrounds,
    //ThemeDecorator – is global decorator to preview custom "Inter" font for storybook
    ThemeDecorator,
];

export const parameters = {
    backgrounds: [
        { name: "plain", value: "white", default: true },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
    ],
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
