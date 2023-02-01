//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigator from './src/navigation/StackNavigator/index';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
