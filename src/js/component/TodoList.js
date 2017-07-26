import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, }) => {
  return(
    <ul>
      {todos.map(todo => {
        <Todo key={todo.id} {...todo} />
      })}
    </ul>
  )
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

export default TodoList;