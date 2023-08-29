import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/HomeScreen/HomeScreen';
import { UnitScreen } from './src/UnitScreen/UnitScreen';
import FinishScreen from './src/FinishScreen/FinishScreen'; // Make sure the import statement is like this

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Unit" component={UnitScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Finish" component={FinishScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
