import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from './../theme/colors';
import Header from './header';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.contentBox}>
            
            <View style={styles.contentArea}>
                <Image style={{height: 100, width: 100, marginTop: 20}} source = {require('../../../image/logo-2.png')} />
                <Text style={{
                    fontSize: 30, 
                    fontWeight: '500', 
                    marginBottom: 25, 
                    color: colors.text
                }}>Non-Contact <br/> Deliveries</Text>

                <Text style={{
                    width: '80%', 
                    fontSize: 20, 
                    marginBottom: 25
                }}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</Text>
            </View>

            <Pressable onPress ={ () => 
                { navigation.navigate("Item")}} 
                style = {styles.btn}>
                <Text style={{
                        color: 'white', 
                        fontSize: 20, 
                        fontWeight: 'bold'
                    }}>Order Now</Text>
            </Pressable>

            <Pressable style = {styles.btn2}>
                <Text style={{
                    fontSize: 20, 
                    fontWeight: 'bold'
                }}>Dismiss</Text>
            </Pressable>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue
    },
    contentBox: {
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