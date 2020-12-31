import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createAppContainer } from 'react-navigation';
import { NavigationContainer, TabActions } from '@react-navigation/native';

import FacebookScreen from './routes/facebook';
import InstagramScreen from './routes/instagram';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'black',
          activeBackgroundColor: '#e6e6e6',
          allowFontScaling: true,
        }}>
          <Tab.Screen name='Facebook' component={ FacebookScreen } />
          <Tab.Screen name='Instagram' component={ InstagramScreen } />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});