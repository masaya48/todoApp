import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
 
import TextField from './src/js/component/parts/TextField';
import TodoList from './src/js/component/TodoList';
import Calender from './src/js/component/Calender';
import TabIcon from './src/js/component/TabIcon';


const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="tabbar" tabs={true} tabBarStyle={{backgroundColor: '#fff'}}>
        <Scene key="todo" title="TODO" icon={TabIcon}>
          <Scene key="todolist" component={TodoList} title="TodoList" />
        </Scene>
        <Scene key="cal" title="CAL" icon={TabIcon}>
          <Scene key="calender" component={Calender} title="Calender" />
        </Scene>
        <Scene key="text" title="TEXT" icon={TabIcon}>
          <Scene key="textfield" component={TextField} title="TextField" />
        </Scene>
      </Scene>
    </Scene>
  </Router>
);

export default App;
