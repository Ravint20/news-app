import React,{Component} from "react";
import {ScrollView, View,Image,ActivityIndicator,StyleSheet,Text} from "react-native"

import config  from "../config/config";


export default class TrendingNews extends Component{
      
    state ={
        news:[]
    }

    componentDidMount(){
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=d4df7f43421546f98ee64c91e84475d8`)
        .then(res =>res.json())
        .then(response =>{
            this.setState({
                news:response.articles
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render(){
    return(
      <View style={styles.container}>
        {
            this.state.news.length === 0 ?
            (<ActivityIndicator color="black" size="large" />)
             :
            ( <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              
              {
                  this.state.news.map((news,index) =>
                  (
                      <View key={index} style={{margin:10}}>
                          <Image source={{uri:`${news.urlToImage}`}} style={{height:200,width:200,borderRadius:10,}}/>
                          <Text style={{width:200,textAlign:'justify'}}>{news.title}</Text>
                      </View>
                  ))
              }
          
                </ScrollView>)
        }

      </View>
    );
}

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  