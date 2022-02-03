import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,TouchableOpacity,Button } from 'react-native';
import { useAsyncStorage } from "@react-native-async-storage/async-storage"

export default function CustomButon(props) {

    
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPressFunction}>
          <Text style={styles.text}> Login
           </Text>
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

  button:{
      width:150,
      height:50,
      backgroundColor:"#00ff00",
      alignItems:'center',
      marginTop:100
  },

  text:{
      color:'#000000',
      fontSize:20,
      margin:10
  }
   
});
