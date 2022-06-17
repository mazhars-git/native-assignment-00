import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from './../theme/colors';
import { Pressable } from 'react-native-web';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center'}} >
            <Image style={{height: 100, width: 100}} source = {require('../../../image/logo-2.png')} />
            <Text style={{fontSize: 30}}>Non-Contact <br/> Deliveries</Text>
            <Text style={{width: '80%', fontSize: 20}}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</Text>
        </View>

        <Pressable>
            <Text>Order Now</Text>
        </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
    },



})