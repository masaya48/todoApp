export const TEXT_UPDATE = 'TEXT_UPDATE';
export const ADD_TODO = 'ADD_TODO';

export const fetchTextUpdate = text => {
  return{
    type: TEXT_UPDATE,
    text: text,
  }
}

let nextId = 0;

export const addTodo = text => {
  return{
    type: ADD_TODO,
    id: nextId++,
    text: text,
  }
}