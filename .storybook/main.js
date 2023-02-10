module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-react-native-web",
    "./customAddons/yarnInstall/preset.ts",
    "storybook-addon-rtl",
  ],
  "framework": "@storybook/react"
}
