// Import React and other necessary components
import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

// Import styles from your styles.js file
import styles from './assets/styles';

// A functional component for your screen
const TotalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Päivä 96: Hiilijalanjälkesi</Text>
      <Text style={styles.subHeader}>Hyvä!</Text>
      <Text style={styles.content}>
        Kerättyjä tietoja: 114 
        </Text>
        <Image
        source={require('./enviromentbg.jpg')}
        style={styles.image}
      />
        <Text style={styles.content}>
        {/* Lorem ipsum can be replaced with actual content */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      {/* Add more components and style them as needed */}
      <TouchableOpacity>
      <Text
        style={styles.button }
        title="Lisätietoa" 
        onPress={() => console.log('Painiketta klikattu!')}
        >
        Lisätietoja
        </Text>
        </TouchableOpacity> 
    </View>
  );
};

// If you haven't already defined your styles in styles.js, here's an example:
const localStyles = StyleSheet.create({
  // You can define local styles that are only used in this view if necessary
});

export default TotalScreen;
