import React from 'react';
import { Button } from 'react-native';

const Button = ({ onPress }) => {
  return(
    <Button
      onPress={onPress}
      title="Add Todo"
      color="#841584"
      accessibilityLabel="Add Todo"
    />
  );
}

export default Button;