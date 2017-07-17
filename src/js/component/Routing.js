import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

const Routing = () => (
  <View style={styles.container}>
    <TouchableOpacity onPress={Actions.TodoList}>
      <Text>TodoList</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={Actions.Calender}>
      <Text>Calender</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={Actions.TextField}>
      <Text>TextField</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
  }
});

export default Routing;