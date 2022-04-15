import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import CarList from './src/components/CarList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={'Cars'}/>
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
});

