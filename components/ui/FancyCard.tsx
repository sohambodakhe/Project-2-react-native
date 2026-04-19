import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function FancyCard() {
    function openWebsite(websitelink: string) {
        Linking.openURL(websitelink).catch((err) => console.error('Failed to open URL:', err));
    }
    return (
        <SafeAreaView>
            <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card , styles.cardFancy]}>
        <Image
        source={{
            uri: 'https://citylister.in/_ipx/f_webp/pune/places/burger-camp-branch-burger-king-2.jpg'
        }}
        style = {styles.cardImage}
        />
        <View style ={styles.cardBody}>
            <Text style ={styles.cardTitle}>Original Burger King</Text>
            <Text style ={styles.cardLabel}>Camp , Pune</Text>
            <Text style ={styles.cardDescription}>Experience the best burgers in town at our original location!</Text>
            <TouchableOpacity onPress={() => openWebsite('https://aksharlock.wordpress.com/2025/05/10/punes-own-burger-king/')}>
            <Text style ={styles.cardFooter}>View Details</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingBottom: 8,


  },
  card:{
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  cardFancy: {
    backgroundColor: '#000000',
    borderRadius: 8,
    elevation: 4,
    shadowOffset: {
        width: 0,
        height: 4,
    }
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    padding: 8,
    
  },
    cardBody: {
        padding: 8,
        paddingBottom: 8,

    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cardLabel: {
        fontSize: 14,
        paddingTop: 4,
        fontFamily: 'sans-serif-light',
        color: '#ffffff',
    },
    cardDescription: {
        fontSize: 12,
        paddingTop: 4,
        fontFamily: 'sans-serif-light',
        color: '#eca6a6',
        paddingBottom: 8,
    },
    cardFooter: {
        fontSize: 14,
        paddingTop: 8,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'sans-serif-light',
        backgroundColor: '#ff4885',
        borderRadius: 4,
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        justifyContent: 'center',
        
}

})
