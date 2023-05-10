# GAIA React Native Components

## Description

The components library based on React Native and Typescript, represented with Storybook(web and native) and
tested with React Testing Library

Explore [GAIA components](https://gaia-components-react-native.vercel.app/) for React Native

## Docs

* [Getting Started](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/1.-Getting-started)
* [Setup Theme and Font](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/2.-Theme)
* [How to use Form](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/3.-Form)
* [How to create a Story](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/4.-Create-a-Story)
* [RTL support](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/6.-RTL-support)
* [Build and Deploy](https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/5.-Build-and-Deploy)

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

## Components website ##
[Components website](https://gaia-components-react-native.vercel.app) is hosted on [Vercel](https://vercel.com/stryber/stryber-react-native-ui-components-v2)
and it builds and deploys the sources automatically once pull request is created and merged.

[Production website](https://gaia-components-react-native.vercel.app) - based on `master` branch

[Devevelopment website](https://dev-gaia-components-react-native.vercel.app) - based on `dev` branch
