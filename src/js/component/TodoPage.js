import React from 'react';
import { View } from 'react-native';
import TodoList from './TodoList';
import TextField from './parts/TextField';

const TodoPage = ({ todos, }) => {
  return(
    <View>
      <TextField />
      <TodoList todos={todos} />
    </View>
  );
}

export default TodoPage;