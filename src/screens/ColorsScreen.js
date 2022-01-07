import React, { useState } from 'react'
import { Text, StyleSheet, Button, View, FlatList } from 'react-native'

const ColorsScreen = () => {
    const [colors, setColor] = useState([])

    return <View>
        <Text style={styles.textStyle}>Colors!</Text>
        <Button
            title='Add a Color!'
            onPress={() => {
                setColor([...colors, randomRgb()])
            }}
        />
        <FlatList
            keyExtractor={item => item}
            data={colors}
            renderItem={({ item }) => {
                //item will be an element from the array so item === randomRgb()
                return <View style={{ height: 100, width: 100, backgroundColor: item }} />
            }}
        />
    </View>
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ColorsScreen
