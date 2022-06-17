import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { spaces } from '../theme/spaces'

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.headerImg}>
            <Image style = {styles.img} source = {require('../../../image/icon.png')} />
        </View>
        
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
    headerImg: {
        padding: spaces[4],
    },
    img:{
        height: 50,
        width: 50,
        backgroundColor: colors.light,
        margin: spaces[2],
        borderRadius: 50,

    }
})