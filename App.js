import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import MovieDetailScreen from "./Screens/MovieDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          options={{ headerShown: false }}
          component={MovieDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
