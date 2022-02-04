import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import config from "../config/config"
import TrendingNews from '../components/TrendingNews';
import Categories from '../components/Categories';


const categories =["Entertainment","Business","Politics","Health","Technology","Sports"]
export default function Dashbord() {
  return (
    <View style={styles.container}>
     
      <Categories />
      
      <TrendingNews />
    
      
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
});
