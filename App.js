import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/screens/header';
import Home from './src/components/screens/home';
import { colors } from './src/components/theme/colors';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
  },
});
