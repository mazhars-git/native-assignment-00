import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Home from './src/components/screens/home';
import { colors } from './src/components/theme/colors';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
  },
});
