import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
// import config from "../config/config"
// import TrendingNews from '../components/TrendingNews';


const categories =["Entertainment","Business","Politics","Health","Technology","Sports"]
export default function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
         categories.map((category,index)=>(
           <View key={index}>
             <Text style={{padding:10,borderWidth:1,borderColor:'black',fontSize:19,margin:10,borderRadius:10}}>{category}</Text>
           </View>
         ))
        }

        
      </ScrollView>
      
    
      
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
