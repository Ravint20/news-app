import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./src/screens/login";
import Dashbord  from './src/screens/dashboard';
import CustomButton from "./src/utils/button";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {

  const Stack =createStackNavigator()
  return (

      
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
         name="Login"
         component={Login}
         options={{
           header: () =>null
         }}
        />
          
        
        <Stack.Screen  
        name="Dashbord"
        component={Dashbord}
        />
          
        
        </Stack.Navigator>

    </NavigationContainer>
    
  )



};
