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
        <Scene key="todo" title="TODO" icon={TabIcon} component={TodoList} />
        <Scene key="cal" title="CAL" icon={TabIcon} component={Calender} />
        <Scene key="text" title="TEXT" icon={TabIcon} component={TextField} />
      </Scene>
    </Scene>
  </Router>
);

export default App;
