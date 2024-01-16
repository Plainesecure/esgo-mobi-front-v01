import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TotalScreen from './components/TotalScreen';


export default function App() {
  return (
    <View style={styles.container}>
       <TotalScreen />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1eed6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

