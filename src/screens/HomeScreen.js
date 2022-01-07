import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Component')}>
        <Text style={styles.buttonText}>Go to Components</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text style={styles.buttonText}>Go to Lists</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text style={styles.buttonText}>Go to Images</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.buttonText}>Go to Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Colors')}>
        <Text style={styles.buttonText}>Go to Colors</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CustomColor')}>
        <Text style={styles.buttonText}>Go to Custom Color</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonText: {
    fontSize: 20,
    margin: 10
  }
})


export default HomeScreen
