import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import myIcon from './assets/my-icon.png';
import * as React from 'react';
import {useState} from "react";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handlePress = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
      <View style={[styles.container, { backgroundColor }]}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.button}>Change Color</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 10,
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 20,
  },
});