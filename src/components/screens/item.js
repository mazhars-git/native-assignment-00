import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from './../theme/colors';

export default function Item() {
  return (
    <View style= {styles.container}>
        <ImageBackground source={require("../../../image/bgpic.png")} 
            style={{height: '100%', width: '100%', marginBottom: 150}}
            resizeMode="cover"
        />
        <View style={styles.itemContentBox}>
            <Text style={styles.title}>Boston Lettuce</Text>
            <Text style={styles.title}>Boston Lettuce</Text>
            <Text style={styles.title}>Boston Lettuce</Text>
            <Text style={styles.title}>Boston Lettuce</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {},
    itemContentBox: {
        backgroundColor: colors.bg,
        padding: 20,

    },
    title: {},
    container: {},
})