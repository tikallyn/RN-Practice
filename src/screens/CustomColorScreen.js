import React, { useState } from 'react'
import { Text, StyleSheet, Button, View, FlatList } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const CustomColorScreen = () => {
    const [red, setRed] = useState(Math.floor(Math.random() * 256))
    const [green, setGreen] = useState(Math.floor(Math.random() * 256))
    const [blue, setBlue] = useState(Math.floor(Math.random() * 256))

    const setColor = (color, change) => {
        //color == red, green, blue
        //change === +15, -15
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return;
        }
    }

    return <View>
        <Text style={styles.textStyle}>Create a Custom Color!</Text>
        <ColorCounter color='Red'
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        />
        <ColorCounter color='Green'
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        />
        <ColorCounter color='Blue'
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        />
        <View style={{ alignSelf: 'center', height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default CustomColorScreen
