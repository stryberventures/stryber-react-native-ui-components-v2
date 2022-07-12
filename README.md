# Stryber React Native UI Components v2

## Docs

* [Getting Started](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/1.-Getting-started)
* [Setup Theme and Font](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/2.-Theme)
* [How to use Form](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/3.-Form)
* [How to create a Story](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/4.-Create-a-Story)
* [Build and Deploy](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/5.-Build-and-Deploy)

## Description

The components library based on React Native and Typescript, represented with Storybook(web and native) and
tested with React Testing Library

Explore [GAIA components](https://stryberventures.github.io/stryber-react-native-ui-components-v2/) for React Native

## To run the project

1) Install dependencies

```shell script
yarn install
```

2) Install pods:

```shell script
cd ios && pod install
```

3) Run the project

* Native:

```shell script
yarn ios
```

* Web:

```shell script
yarn storybook
```

## To run tests

The test setup is based on React Testing Library with Jest runner. To run tests:
```shell script
yarn test 
```

## Components website

[Components website](https://stryberventures.github.io/stryber-react-native-ui-components-v2/) is built with Github Pages and it builds and deploys automatically
with Github actions (.github/workflows/storybook.yml)
