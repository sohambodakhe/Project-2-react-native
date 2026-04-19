import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ActionCard() {
  function openWebsite(websitelink: string) {
    Linking.openURL(websitelink).catch((err) => console.error('Failed to open URL:', err));
  }
  return (
    <SafeAreaView>
      <View>
        <Text style = {styles.headingText}>Blog Card</Text>
        <View style = {[ styles.card , styles.cardAction]}>
          <View style = {styles.headingContainer}>
            <Text style = {styles.headerTitle}>What's new in Javascript 2026</Text>
          </View>
          <Image
          source={{
            uri: 'https://read.learnyard.com/content/images/2024/07/logo.png'
          }}
          style = {styles.cardImage}
          />
          <View style = {styles.bodyContainer}>
            <Text>
              Discover the latest advancements in JavaScript for 2026!
            </Text>
          </View>
          <View style = {styles.footerContainer}>
            <TouchableOpacity>
              <Text style = {styles.cardFooter} onPress={() => openWebsite('https://read.learnyard.com/whats-new-in-javascript-2026')}>
                Read More
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style = {styles.socialMedia} onPress={() => openWebsite('https://www.instagram.com/sohmusicism/')}>
                Follow Me
              </Text>
            </TouchableOpacity>
          </View> 
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingText: {
        fontSize : 18,
        fontWeight: 'bold',
        padding: 8
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        padding: 8,
        marginBottom: 20,
        marginTop: 8,
        marginHorizontal: 8,
        marginVertical: 8,
    },
    cardAction: {
        backgroundColor: '#ffffff',
        elevation: 4,
        shadowOffset: {
            width: 0,
            height: 2,

        }
    },
    headingContainer: {
        marginBottom: 8,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        padding: 8,
    },
    bodyContainer: {
        paddingHorizontal: 8,
        paddingTop: 4,
        fontFamily: 'sans-serif-light',
        fontSize: 14,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    },
    cardFooter: {
        backgroundColor: '#ff4885',
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: 'center',
        borderRadius: 4,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    socialMedia: {
        backgroundColor: '#ff4885',
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: 'center',
        borderRadius: 4,
        fontWeight: 'bold',
        color: '#ffffff',
    }
})