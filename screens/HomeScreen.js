import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const [miles, setMiles] = useState('0');

  return (
    <View style={styles.container}>
      <Text>Enter mileage:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 50"
        onChangeText={(val) => setMiles(val)}
      />
      <Button
        color="orange"
        title="Click Me"
        onPress={() => navigation.navigate('Results')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 100,
  },
});

export default HomeScreen;
