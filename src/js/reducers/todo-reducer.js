// actionのtypeをimportしておく
import {
  TEXT_UPDATE,
} from '../actions/todo';

// 初期化
const initialState = {
  text: '',
};

export default function todoReducer(state = initialState, action = {}){
  switch (action.type){
    case TEXT_UPDATE:
      // 空のObnectにマージする
      return Object.assign({}, state, {
        text: action.text,
      })
    default:
      return state;    
  }
}