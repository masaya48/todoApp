import React from 'react';
import { View } from 'react-native';
import TodoList from './TodoList';
import TextField from './parts/TextField';
import Button from './parts/Button';

const TodoPage = ({ todos, }) => {
  return(
    <View>
      <TextField />
      <Button onPress={addTodo} />
      <TodoList todos={todos} />
    </View>
  );
}

const addTodo = () => {
  console.log('addTodo');
}

export default TodoPage;