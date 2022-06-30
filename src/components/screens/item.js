import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from './../theme/colors';
import { AntDesign } from '@expo/vector-icons';

export default function Item() {
  return (
    <View style= {styles.container}>
        <ImageBackground source={require("../../../image/bgpic.png")} 
            style={{height: '120%', width: '100%'}}
            resizeMode="cover"
        />
        <View style={styles.itemContentBox}>
            <Text style={styles.title}>Boston Lettuce</Text>
            <Text style={styles.title}>1.10 $/pice</Text>
            <Text style={styles.title}>~ 150 gr / price</Text>
            <Text style={styles.title}>Spain</Text>
            <Text style={styles.details}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
        </View>
        <View style={styles.btnBox}>
            <View style={styles.heart}>
                <AntDesign name="heart" size={20} color="black" />
            </View>
            
            <Pressable>
                <Text style={styles.btn} >Add To Cart</Text>
            </Pressable>
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
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 25,
    },
    details: {
        fontSize: 20,
        fontWeight: '200',
        lineHeight: 25,
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: colors.green,
        width: 300,
        padding: 20,
        margin: 20,
        borderRadius: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    heart: {
        backgroundColor: colors.white,
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 5,
        cursor: 'pointer',
    }
})