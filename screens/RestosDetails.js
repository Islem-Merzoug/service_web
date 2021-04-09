import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { global } from '../styles/global';

export default function RestosDetails({ route, navigation }) {
  const { Name, Address } = route.params;


  return (
    // <View style={global.container}>
    //   <Text>heyyy</Text>
    //   <Text>Address: {JSON.stringify(Address)}</Text>
    //   <Text>Name: {JSON.stringify(Name)}</Text>

    //   <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    //   <Button title="Go back" onPress={() => navigation.goBack()} />

    // </View>

    <View style={styles.container}>
    <ScrollView>
      <View style={{alignItems:'center', marginHorizontal:30}}>
        <Image style={styles.productImg} source={{uri:"https://img.icons8.com/color/70/000000/cottage.png"}}/>
        <Text style={styles.name}>{JSON.stringify(Name)}</Text>
        <Text style={styles.price}>{JSON.stringify(Address)}</Text>
        <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
              natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Donec quam felis, ultricies nec
            </Text>

      </View>
      <View style={styles.starContainer}>
        <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
        <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
        <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
        <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.addToCarContainer}>
        <TouchableOpacity style={styles.shareButton} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=g-cPBUoBRjI&ab_channel=GezenAdam' ); }}>
          <Text style={styles.shareButtonText}>Video</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton} onPress={() => navigation.navigate('Home')}  >
          <Text style={styles.shareButtonText}>Home</Text>  
        </TouchableOpacity>
      </View> 
    </ScrollView>
  </View>
);
}


const styles = StyleSheet.create({
container:{
flex:1,
marginTop:20,
},
productImg:{
width:200,
height:200,
},
name:{
fontSize:23,
color:"#696969",
fontWeight:'bold'
},
price:{
marginTop:10,
fontSize:18,
color:"green",
fontWeight:'bold'
},
description:{
textAlign:'center',
marginTop:10,
color:"#696969",
},
star:{
width:40,
height:40,
},
btnColor: {
height:30,
width:30,
borderRadius:30,
marginHorizontal:3
},
btnSize: {
height:40,
width:40,
borderRadius:40,
borderColor:'#778899',
borderWidth:1,
marginHorizontal:3,
backgroundColor:'white',

flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
},
starContainer:{
justifyContent:'center', 
marginHorizontal:30, 
flexDirection:'row', 
marginTop:20
},
contentColors:{ 
justifyContent:'center', 
marginHorizontal:30, 
flexDirection:'row', 
marginTop:20
},
contentSize:{ 
justifyContent:'center', 
marginHorizontal:30, 
flexDirection:'row', 
marginTop:20
},
separator:{
height:2,
backgroundColor:"#eeeeee",
marginTop:20,
marginHorizontal:30
},
shareButton: {
marginTop:10,
height:45,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
borderRadius:30,
backgroundColor: "#00BFFF",
},
shareButtonText:{
color: "#FFFFFF",
fontSize:20,
},
addToCarContainer:{
marginHorizontal:30
}
});   