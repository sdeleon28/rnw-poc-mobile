# rnw-poc-mobile

Showcases how to use a components built with react-native-web in a React Native project.

## Installing

```
git clone https://github.com/sdeleon28/rnw-poc-mobile
cd rnw-poc-mobile
yarn install
```

## Running

```
react-native run-ios
```

## Details

Uses [rnw-poc-web](https://github.com/sdeleon28/rnw-poc-web) as a dependency, via `git subtree` which makes it immediately available after download (no extra install steps required).

We reuse the component defined at the webapp level by importing it from our `index.ios.js` file:

```javascript
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { DemoWidget } from './lib/webapp/src/components';

const DemoApp = () => <DemoWidget onPress={() => alert('Component works from React Native!')} />;

AppRegistry.registerComponent('DemoApp', () => DemoApp);
```

For more info about how `DemoWidget` is constructed on the web side, have a look at it's [docs](./lib/webapp/README.md)
