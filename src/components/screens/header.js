import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        width: '100%',
        height: "100%",       
    }
})