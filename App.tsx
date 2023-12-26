import React from 'react';
import Config from 'react-native-config';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  console.log('Config----------', Config);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.envText}>{Config.ENV}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  envText: {
    fontSize: 20,
    color: 'black',
  },
});
