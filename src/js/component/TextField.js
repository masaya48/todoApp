import React from 'react';
import {AppRegistry, TextInput} from 'react-native';

export default class TextField extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TextInput/>
    );
  }
}

AppRegistry.registerComponent('todoApp', () => TextField);