import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from '../screens/Dashboard';
import { CreateCard } from '../screens/CreateCard';

const { Navigator, Screen } = createStackNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {/* <Screen name="Dashboard" component={Dashboard} /> */}
        <Screen name="CreateCard" component={CreateCard} />
      </Navigator>
    </NavigationContainer>
  );
};
