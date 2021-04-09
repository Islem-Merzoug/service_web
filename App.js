import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, StatusBar, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MyStack from './routes/MyStack';

export default App = ({ navigation }) => {


  return (
    <View style={styles.container}>

      <NavigationContainer>
        <MyStack />
        {/* <TouchableOpacity onPress={() => navigation.navigate('Home')  }>
            <Text style={styles.item}>{item.nomlieux}</Text>
          </TouchableOpacity> */}
      </NavigationContainer>


      
    </View>

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => {
    //       /* 1. Navigate to the Details route with params */
    //       navigation.navigate('LieuxDetails', {
    //         itemId: 86,
    //         otherParam: 'anything you want here',
    //       });
    //     }}
    //   />
    // </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});