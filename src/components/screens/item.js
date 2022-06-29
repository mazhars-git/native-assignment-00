import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from './../theme/colors';

export default function Item() {
  return (
    <View style= {styles.container}>
        <ImageBackground source={require("../../../image/bgpic.png")} 
            style={{height: '80%', width: '100%'}}
            resizeMode="cover"
        />
        <View style={styles.itemContentBox}>
            <Text style={styles.title}>Boston Lettuce</Text>
            <Text style={styles.title}>1.10 $/pice</Text>
            <Text style={styles.title}>~ 150 gr / price</Text>
            <Text style={styles.title}>Spain</Text>
            <Text style={styles.title}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 0,

    },
    itemContentBox: {
        backgroundColor: colors.bg,
        padding: 30,

    },
    title: {},
    container: {},
})