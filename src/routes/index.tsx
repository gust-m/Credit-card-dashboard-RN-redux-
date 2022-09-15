import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from '../screens/Dashboard';

const { Navigator, Screen } = createStackNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
};
