import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FlatCards() {
  return (
    <View style={styles.section}>
      <Text style = {styles.headingText}>Flat Cards</Text>
      <View style = {styles.container}>
        <View style = {[styles.card , styles.cardOne]}>
            <Text>Red.</Text>
        </View>
        <View style = {[styles.card , styles.cardTwo]}>
            <Text>Yellow.</Text>
        </View>
        <View style = {[styles.card , styles.cardThree]}>
            <Text>Cyan.</Text>
        </View>
        <View style = {[styles.card , styles.cardThree]}>
            <Text>Cyan.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize : 24,
        fontWeight: 'bold',
        paddingHorizontal : 10
    },
    container: {
        flexDirection: 'row',
        padding: 10

    },
    card: {
        flex : 1,
        width: 100,
        height: 100,
        borderRadius: 4,
        margin : 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardOne: {
        backgroundColor: '#e01d1d'
    },
    cardTwo: {
        backgroundColor: '#45c724'
    },
    cardThree: {
        backgroundColor: '#17e4d9'
    },
    section: {
        marginBottom: 20,
    }
})