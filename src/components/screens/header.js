import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { spaces } from '../theme/spaces'

export default function Header() {
  return (
    <View style={styles.container}>
        <Image style = {styles.img} source = {require('../../../image/logo.png')} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        width: '100%',
        height: "100%",      
    },
    img:{
        height: 100,
        width: 100,
        padding: spaces[4],
        marginBottom: 70,
    }
})