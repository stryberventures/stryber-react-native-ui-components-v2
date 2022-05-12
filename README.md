# Stryber React Native UI Components v2 #

## Description ##

The components library based on React Native and Typescript, represented with Storybook(web and native) and
tested with React Testing Library

## To run the project ##

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

## To run tests ##

The test setup is based on React Testing Library with Jest runner. To run tests:
```shell script
yarn test 
```

## To prepare component for deployment ##

1) Update the version in the package.json file in the component's directory you want
   to publish or create package.json file if it does not exist.


2) Check dependencies of the component.
   If component use an external library, in most cases it should be added as peer dependency to the package.json file.
   Otherwise, external library sources will be added to the component's source bundle.
   In case the component use another component from the library, it works in the same way.

For example, if you use the Button inside your component
```shell script
import Button from '../Button';
```
and add ``"@stryberventures/gaia-react-native.button": ">=0.0.1"`` the ``Button`` source will not be
included to component's build

And vise versa, if the ``@stryberventures/gaia-react-native.button`` is not in the peer dependency list,
the source of the ``Button`` will be bundled with the component

Components names are based on ``export.config.json``

3) Add the component to ``export.config.json``

## To deploy the component to npm ##

1) Build the project

```shell script
yarn build
```

2) Navigate to the component's folder you want to publish, for example the Button

```shell script
cd build/Button
```

3) Publish the component

```shell script
npm publish --access public
```

## To test the component before deployment ##
You can pack the component and install it locally to ensure that everything works as
expected. To do so, navigate to the component in the build directory
and run 'npm pack'

```shell script
cd build/Button
npm pack
```

It will create an .tgz archive, which you can copy to your project's root directory and
then install like:

```shell script
npm i ./stryberventures-stryber-react-ui-components-v2.button-0.0.1.tgz
```

## Components website ##

Components website is built with Github Pages and it builds and deploys automatically
with Github actions (.github/workflows/storybook.yml)
https://stryberventures.github.io/stryber-react-native-ui-components-v2/
