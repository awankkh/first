//App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/HomeScreen/HomeScreen';
import { UnitScreen } from './src/UnitScreen';
import { SubcategoryScreen } from './src/SubcategoryScreen'; // Import the new SubcategoryScreen
import { subcategories } from './src/constants'; // Import the subcategories

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Unit" component={UnitScreen} options={{ headerShown: false }} />
        {/* Define a screen for each subcategory */}
        {subcategories.map((subcategory) => (
          <Stack.Screen
            key={subcategory}
            name={subcategory}
            component={SubcategoryScreen}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
