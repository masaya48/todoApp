import React from 'react';
import {TextInput} from 'react-native';

export default class TextField extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return(
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

// AppRegistry.registerComponent('todoApp', () => TextField);