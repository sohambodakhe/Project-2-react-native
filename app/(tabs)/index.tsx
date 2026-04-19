import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

import FlatCards from '@/components/ui/FlatCards'
import ElevatedCards from '@/components/ui/ElevatedCards'
import FancyCard from '@/components/ui/FancyCard'
import ActionCard from '@/components/ui/ActionCard'
import ContactList from '@/components/ui/ContactList'


const App = () => {
  return (
    <SafeAreaView style = {{ flex : 1, backgroundColor: 'white' }}>
    <ScrollView>
    <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App