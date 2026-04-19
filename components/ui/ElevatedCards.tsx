import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ElevatedCards() {
  return (
    <SafeAreaView style={styles.section}>
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal = {true} style = {styles.container}>
        <View style = {[styles.card , styles.cardElevated]}>
            <Text>Tap.</Text>
        </View>
        <View style = {[styles.card , styles.cardElevated]}>
            <Text>Me.</Text>
        </View>
        <View style = {[styles.card , styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style = {[styles.card , styles.cardElevated]}>
            <Text>Scroll.</Text>
        </View>
        <View style = {[styles.card , styles.cardElevated]}>
            <Text>more.</Text>
        </View>
        <View style = {[styles.card , styles.cardElevated]}>
            <Text>lol.</Text>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize : 18,
        fontWeight: 'bold',
        paddingHorizontal : 10,

    },
    container:{
        padding : 8,

    },
  section: {
    marginBottom: 20,
  },
    card: {
        flex: 1,
        width : 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8,

    },
    cardElevated :{
        backgroundColor: '#e418b1',
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#000000',
        shadowRadius: 2
        }
    }
)