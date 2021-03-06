import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, PickerIOSComponent } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, Worlds</Text>
      </View>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header : {
    backgroundColor : 'pink',
    padding:20,
  },
  boldText:{
    fontWeight:'bold'
  }
});
