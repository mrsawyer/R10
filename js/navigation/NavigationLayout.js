import React, { Component } from 'react';
import { colors, typography } from '../config/styles';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Router from './router';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: colors.white,
    titleStyle: {
      fontFamily: typography.fontMain,
      color: colors.white
    },
    renderBackground: () => <LinearGradient
                            start={{x: 0.25, y: 1.0}}
                            end={{x: 1.0, y: 0.25}}
                            colors={[colors.red, colors.purple]}
                            style={styles.linearGradient}
                            />
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <TabNavigation
        tabBarColor={colors.black}
        id="main"
        navigatorUID="main"
        initialTab="about">
        <TabItem
          id="about"
          title="About"
          renderTitle={ this.renderTitle }
          renderIcon={ (isSelected) => this.renderIcon('ios-information-circle', isSelected) }
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>

        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={ this.renderTitle }
          renderIcon={(isSelected) => this.renderIcon('ios-calendar', isSelected) }
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>
      </TabNavigation>
    );
  }

  renderIcon(iconName, isSelected) {
    return (<Icon name={iconName} size={24} color={isSelected ? colors.white : colors.mediumGrey} />);
  }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? colors.white : colors.mediumGrey,
      fontSize: 12,
      fontFamily: typography.fontMain
    }
    return (<Text style={titleStyle}>{title}</Text>);
  }
}

export default NavigationLayout;
