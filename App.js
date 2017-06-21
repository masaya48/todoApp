import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextField from './src/js/component/TextField';

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>test</Text>
        <TextField></TextField>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});