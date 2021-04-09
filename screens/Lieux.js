import React, { useEffect, useState } from 'react';

import { ActivityIndicator, FlatList, Text, View, StyleSheet, StatusBar, TouchableOpacity, Button, Image } from 'react-native';
import { global } from '../styles/global'

const Lieux = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

  
    useEffect(() => {
      fetch("http://192.168.1.104:3000/api/lieux")
        .then((response) => response.json())
        .then((json) => {
          setData(json)
          // console.log(json)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

return (
  <View style={styles.container}>
    <FlatList style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={data}
      horizontal={false}
      numColumns={2}
      keyExtractor={(item) => item.idlieux.toString()} 
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('LieuxDetails', item)  }>
            <View style={styles.cardFooter}></View>
            <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/cotton/64/000000/romantic-places--v1.png"}}/>
            <View style={styles.cardHeader}>
              <View style={{alignItems:"center", justifyContent:"center"}}>
                <Text style={styles.title}>{item.nomlieux}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }}/>
  </View>
);
}


const styles = StyleSheet.create({
container:{
flex:1,
marginTop:20,
},
list: {
paddingHorizontal: 5,
backgroundColor:"#E6E6E6",
},
listContainer:{
alignItems:'center'
},
/******** card **************/
card:{
shadowColor: '#00000021',

shadowOffset: {
  width: 0,
  height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
marginVertical: 10,
backgroundColor:"white",
flexBasis: '42%',
marginHorizontal: 10,
},
cardHeader: {
paddingVertical: 17,
paddingHorizontal: 16,
borderTopLeftRadius: 1,
borderTopRightRadius: 1,
flexDirection: 'row',
alignItems:"center", 
justifyContent:"center"
},
cardContent: {
paddingVertical: 12.5,
paddingHorizontal: 16,
},
cardFooter:{
flexDirection: 'row',
justifyContent: 'space-between',
paddingTop: 12.5,
paddingBottom: 25,
paddingHorizontal: 16,
borderBottomLeftRadius: 1,
borderBottomRightRadius: 1,
},
cardImage:{
height: 70,
width: 70,
alignSelf:'center'
},
title:{
fontSize:18,
flex:1,
alignSelf:'center',
color:"#696969"
},
});   
                    
    
    
    
export default Lieux



