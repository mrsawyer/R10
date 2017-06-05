import React, { Component } from 'react';
import { colors, typography } from '../config/styles';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
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
      <DrawerNavigation
        drawerWidth={300}
        id="main"
        navigatorUID="main"
        initialItem="about">
        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          renderTitle={ (isSelected) => this.renderTitle('Schedule', isSelected) }
          renderIcon={(isSelected) => this.renderIcon('md-calendar', isSelected) }
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="map"
          title="map"
          renderTitle={ (isSelected) => this.renderTitle('Map', isSelected) }
          renderIcon={ (isSelected) => this.renderIcon('md-map', isSelected) }
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            id="map"
            navigatorUID="map"
            //initialRoute={Router.getRoute('map')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="faves"
          title="Faves"
          renderTitle={ (isSelected) => this.renderTitle('Faves', isSelected) }
          renderIcon={ (isSelected) => this.renderIcon('md-heart', isSelected) }
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          title="About"
          renderTitle={ (isSelected) => this.renderTitle('About', isSelected) }
          renderIcon={ (isSelected) => this.renderIcon('md-information-circle', isSelected) }
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  renderIcon(iconName, isSelected) {
    return (<Icon name={iconName} size={24} color={isSelected ? colors.purple : colors.mediumGrey} />);
  }

  renderTitle(title, isSelected) {
    const titleStyle = {
      color: isSelected ? colors.purple : colors.mediumGrey,
      fontSize: 12,
      fontFamily: typography.fontMain
    }
    return (<Text style={titleStyle}>{title}</Text>);
  }
}

export default NavigationLayout;
