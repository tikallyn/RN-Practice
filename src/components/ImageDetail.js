import React from 'react'
import { Text, StyleSheet, Image, View } from 'react-native'

const ImageDetail = ({ title, imageSource, score }) => {
    return <View>
        <Image source={imageSource} />
        <Text style={styles.textStyle}>{title}</Text>
        <Text>Image Score: {score}</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})

export default ImageDetail
