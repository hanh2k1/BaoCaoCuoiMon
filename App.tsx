import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen/HomeScreen';
import Chitietsp from './Chitietsp/Chitietsp';
import Dathang from './DathangTsx/Dathang';
import LoginScreen from './src/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chitietsp" component={Chitietsp} />
        <Stack.Screen name="Dathang" component={Dathang} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
