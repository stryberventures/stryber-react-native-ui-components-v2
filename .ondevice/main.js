module.exports = {
    stories: ["../src/components/**/*.stories.tsx", "../src/modules/**/*.stories.tsx"],
    addons: [
        "./customAddons/RTLMode",
        "@storybook/addon-ondevice-notes",
        "@storybook/addon-ondevice-controls",
        "@storybook/addon-ondevice-backgrounds",
    ],
};
