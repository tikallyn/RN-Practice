import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.view1} />
            <Text style={styles.view2} />
            <Text style={styles.view3} />
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        margin: 5
    },
    view2: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        margin: 5,
        alignSelf: 'flex-end',
    },
    view3: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
        margin: 5
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 200,
        borderWidth: 3,
        borderColor: 'pink',
    }
})

export default BoxScreen
