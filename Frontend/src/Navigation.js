import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddProductScreen from './screens/AddProductScreen';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
