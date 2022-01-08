import React, { useReducer } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
    //state === { red: num, green: num, blue: num }
    //action is an obj desc how to change state obj 
    //action === { colorToChange: 'red || 'green' || 'blue', amount: -15, +15}
    switch (action.type) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount }
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount }
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount }
        default:
            return state
    }
}

const CustomColorScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state
    //state will be set exactly equal to the obj in the second argument
    //dispatch runs the reducer

    return (
        <View>
            <Text style={styles.textStyle}>Create a Custom Color!</Text>
            <ColorCounter color='Red'
                onIncrease={() => dispatch({ type: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'red', amount: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter color='Green'
                onIncrease={() => dispatch({ type: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'green', amount: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter color='Blue'
                onIncrease={() => dispatch({ type: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'blue', amount: -1 * COLOR_INCREMENT })}
            />
            <View style={{ alignSelf: 'center', height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default CustomColorScreen
