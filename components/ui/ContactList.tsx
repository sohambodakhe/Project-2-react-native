import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    { id: 1, name: 'Alice', phone: '123-456-7890' },
    { id: 2, name: 'Bob', phone: '987-654-3210' },
    { id: 3, name: 'Charlie', phone: '555-555-5555' },
    { id: 4, name: 'David', phone: '555-555-2455' },
  ]
  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView style = {styles.container}
      scrollEnabled={false}>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
    container: {}
})