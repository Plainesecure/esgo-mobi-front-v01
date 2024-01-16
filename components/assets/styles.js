import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#e1eed6', // Oletetaan, että tausta on valkoinen
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000', // Oletetaan, että otsikko on musta
      marginTop: 20, 
    },
    subHeader: {
      fontSize: 18,
      color: '#333333', // Oletetaan tummanharmaa teksti
    },
   
    content: {
        fontSize: 16,
        color: '#666666',
        flex: 1,
        justifyContent: 'center', // Keskittää teksti pystysuunnassa
        alignItems: 'center', // Keskittää teksti vaakasuunnassa
      },

      image: {
        width: 400, // Leveys täyttää containerin
        height: 400, // Korkeus, oletetaan esimerkkinä 200
        resizeMode: 'contain',
      },

    button: {
        backgroundColor: '#0b472c', // Painikkeen taustaväri
        color: '#fff',
        padding: 15,
        textAlign:'center',
        borderRadius: 5,
        marginBottom: 20, // Tilaa alareunassa
        alignSelf: 'stretch', // Painikkeen venyttäminen täyteen leveyteen
    }

    // Lisää tyylejä elementeille kuten painikkeille, laatikoille jne.
    // https://github.com/vhpoet/react-native-styling-cheat-sheet

  });
  
  export default styles;