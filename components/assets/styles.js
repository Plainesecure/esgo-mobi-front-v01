import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e1eed6', // Oletetaan, että tausta on valkoinen
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000', // Oletetaan, että otsikko on musta
    },
    subHeader: {
      fontSize: 18,
      color: '#333333', // Oletetaan tummanharmaa teksti
    },
    content: {
      fontSize: 16,
      color: '#666666', // Oletetaan keskiharmaa teksti
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    }
    // Lisää tyylejä elementeille kuten painikkeille, laatikoille jne.
    // https://github.com/vhpoet/react-native-styling-cheat-sheet
  });
  
  export default styles;