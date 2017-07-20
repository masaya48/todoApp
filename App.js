import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger }  from 'redux-logger'; 
 
import TextField from './src/js/component/parts/TextField';
import TodoList from './src/js/component/TodoList';
import Calender from './src/js/component/Calender';
import TabIcon from './src/js/component/TabIcon';

import reducers from './src/js/reducers';
const RouterWithRedux = connect()(Router);

// create store...
const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);


const App = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root">
        <Scene key="tabbar" tabs={true} tabBarStyle={{backgroundColor: '#fff'}}>
          <Scene key="todo" title="TODO" icon={TabIcon} component={TodoList} />
          <Scene key="cal" title="CAL" icon={TabIcon} component={Calender} />
          <Scene key="text" title="TEXT" icon={TabIcon} component={TextField} />
        </Scene>
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default App;
