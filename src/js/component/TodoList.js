import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Routing from './Routing';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>todoList</Text>
        <Routing />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 32,
    color: 'rgb(95, 177, 237)',
  },
});