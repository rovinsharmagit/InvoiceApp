import { StyleSheet, Text, View,Image, TouchableOpacity, StatusBar } from 'react-native';
import CreateBill from './CreateBill';


const HomeScreen = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={require('../assets/react-native-app-link.png')}
      />
       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(CreateBill)}
      >
        <Text>Create Bill</Text>
      </TouchableOpacity>
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
    tinyLogo : {
      width : 100,
      height:100
    },
    button: {
      alignItems: "center",
      backgroundColor: "lightblue",
      padding: 10,
      borderRadius:4
    },
  });
 
export default HomeScreen;