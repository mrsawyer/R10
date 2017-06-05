/**
 * R10 App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
  NavigationStyles
} from '@expo/ex-navigation';

import { Provider } from 'react-redux';

import Router from './navigation/router';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation
          navigatorUID="root"
          initialRoute={Router.getRoute('layout')}
          defaultRouteConfig={{styles: {...NavigationStyles.SlideVertical}}}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
