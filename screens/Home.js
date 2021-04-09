import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { global } from '../styles/global';

export default function Home({ route, navigation }) {

  return (
    // <View style={global.container}>

    //   <Button title="Go to Lieux" onPress={() => navigation.navigate('Lieux')} />
    //   <Button title="Go to Restos" onPress={() => navigation.navigate('Restos')} />
      // <Button title="Go back" onPress={() => navigation.goBack()} />

    // </View>
    <View style={styles.container} >
      <View style={styles.reviewContainer}  >
        <Text style={styles.title} onPress={() => navigation.navigate('Lieux')}>Lieux reviews 🏢</Text>
      </View>
      <View style={styles.reviewContainer}  >
        <Text style={styles.title} onPress={() => navigation.navigate('Restos')}>Restos reviews 🥙</Text>
      </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  reviewContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 40,
    minWidth: "80%",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowColor: "rgba(193, 211, 251, 0.5)",
    elevation: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#323357",
    textAlign: "center",
  },
});