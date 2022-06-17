import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from './../theme/colors';
import { Pressable } from 'react-native-web';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.contentArea}>
            <Image style={{height: 100, width: 100, marginTop: 20}} source = {require('../../../image/logo-2.png')} />
            <Text style={{fontSize: 30, marginBottom: 25}}>Non-Contact <br/> Deliveries</Text>
            <Text style={{width: '80%', fontSize: 20, marginBottom: 25}}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</Text>
        </View>

        <Pressable style = {styles.btn}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Order Now</Text>
        </Pressable>

        <Pressable style = {styles.btn2}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dismiss</Text>
        </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    contentArea: {
        alignItems: 'center',
        textAlign: 'center',
    },
    btn: {
        backgroundColor: colors.green,
        padding: 20,
        margin: 20,
        borderRadius: 5,
        textAlign: 'center',
    },
    btn2:{
        padding: 20,
        textAlign: 'center',
    }


})