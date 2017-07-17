import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  tabText: {
    color: 'white',
  },
  tabTextActive: {
    color: 'gray',
  },
});

const TabIcon = ({selected, title}) => (
  <Text style={ selected ? styles.tebTextActive :styles.tabText }>
    {title}
  </Text>
);

export default TabIcon;