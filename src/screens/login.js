import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButon from '../utils/button';

export default function Login({ navigation }) {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');


  const setData = async () => {

    if (name.length == 0 || password.length == 0) {
      Alert.alert('warning!', "Please Enter your credentials")

    }

    else {
      try {
        await AsyncStorage.setItem('UserName', name);
        await AsyncStorage.setItem('Password', password);
        navigation.navigate("Dashbord")


      }

      catch (error) {
        console.log(error)
      }
    }

  }
  return (
    <View style={styles.container}>

      <TextInput style={styles.heading}>World News</TextInput>
      <View
        style={styles.inputView}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter user name"
          onChangeText={(value) => setname(value)}>

        </TextInput>
      </View>

      <View 
      style={styles.inputView}
      >
        <TextInput 
        style={styles.input}
         placeholder="Enter Password" 
         onChangeText={(value) => setPassword(value)}>
           
         </TextInput>
      </View>
      {/* <CustomButon
      onPressFunction={setData}
     /> */}

      <TouchableOpacity style={styles.button}
        onPress={setData}

      >
        <Text style={styles.text}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#0080ff',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },


  input: {
    height: 50,
    flex: 1,
    padding: 10,
    //marginLeft: 10,

  },
  button: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },

  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  heading: {
    fontSize: 50,
    color: "blue",
    marginBottom: 50
  }
});
