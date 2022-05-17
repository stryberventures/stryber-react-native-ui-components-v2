module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../src/components/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-react-native-web"
  ],
  "framework": "@storybook/react"
}
