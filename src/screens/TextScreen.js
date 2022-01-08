import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')
    return (
        <View>
            <Text style={styles.textStyle}>Text Input!</Text>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    input: {
        margin: 15,
        borderColor: 'purple',
        borderWidth: 2
    }
})

export default TextScreen
