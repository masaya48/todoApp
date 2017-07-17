import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
 
import TextField from './src/js/component/parts/TextField';
import TodoList from './src/js/component/TodoList';
import Calender from './src/js/component/Calender';
import TabIcon from './src/js/component/TabIcon';

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: 'rgb(50, 207, 202)',
  },
});

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="tabbar" tabs={true} tabBarStyle={styles.tabBar}>
        <Scene key="TodoList" component={TodoList} title="todoList" icon={TabIcon} />
        <Scene key="Calender" component={Calender} title="calender" icon={TabIcon} />
        <Scene key="TextField" component={TextField} title="textField" icon={TabIcon} />
      </Scene>
    </Scene>
  </Router>
);

export default App;
