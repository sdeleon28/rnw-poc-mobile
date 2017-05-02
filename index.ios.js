import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { DemoWidget } from './lib/webapp/src/components';

const DemoApp = () => <DemoWidget onPress={() => alert('Component works from React Native!')} />;

AppRegistry.registerComponent('DemoApp', () => DemoApp);

