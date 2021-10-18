import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,FlatList  } from 'react-native';
import CarScreen from './src/CarScreen'
import cars from './src/cars'

const baseUrl = './assets/images/'

export default function App() {
  return (
    
    
    <View style={styles.container}>
<CarScreen image= {baseUrl + "ModelS.jpeg"} title= "Model S" tag="Starting at $69,900"/>
      {/* <FlatList
        keyExtractor={(car) => car.name}
        data={cars}
        renderItem={item => <CarScreen image={item.image} title= {item.name} tag={ item.tagline}/>}
    /> */}
      
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
