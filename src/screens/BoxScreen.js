import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box One</Text>
            <Text style={styles.textStyle}>Box Two</Text>
            <Text style={styles.textStyle}>Box Three</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        borderWidth: 2,
        borderColor: 'purple',
        margin: 10
    },
    viewStyle: {
        borderWidth: 3,
        borderColor: 'pink',
    }
})

export default BoxScreen
