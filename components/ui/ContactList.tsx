import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

interface Contact {
  uid: number;
  name: string;
  message: string;
  time: string;
  imageUrl: string;
  status: 'online' | 'offline';
  unread: number;
  accent: string;
}

export default function ContactList() {
  const contacts: Contact[] = [
    {
      uid: 1,
      name: 'Alice',
      message: 'Hey, are you coming tonight?',
      time: '09:28.',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      status: 'online',
      unread: 3,
      accent: '#7b61ff',
    },
    {
      uid: 2,
      name: 'Bob',
      message: 'Got the files. Thanks!',
      time: '08:12.',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      status: 'offline',
      unread: 0,
      accent: '#ff6b6b',
    },
    {
      uid: 3,
      name: 'Charlie',
      message: 'Let’s meet at 2 PM.',
      time: 'Yesterday.',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      status: 'online',
      unread: 1,
      accent: '#00c851',
    },
    {
      uid: 4,
      name: 'David',
      message: 'I finished the draft.',
      time: 'Mon.',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
      status: 'offline',
      unread: 0,
      accent: '#ffbb33',
    },
    {
      uid: 5,
      name: 'Eve',
      message: 'Can you review this?',
      time: 'Sun.',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
      status: 'online',
      unread: 5,
      accent: '#33b5e5',
    },
  ]

  const renderItem = ({ item }: { item: Contact }) => (
    <View style={[styles.userCard, { borderLeftColor: item.accent }]}>
      <View style={[styles.statusDot, item.status === 'online' ? styles.online : styles.offline]} />
      <Image source={{ uri: item.imageUrl }} style={styles.userImage} />
      <View style={styles.userInfo}>
        <View style={styles.nameRow}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
        <View style={styles.messageRow}>
          <Text numberOfLines={1} style={styles.lastMessage}>
            {item.message}
          </Text>
          {item.unread ? (
            <View style={[styles.unreadBubble, { backgroundColor: item.accent }]}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Chat</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item: Contact) => item.uid.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#e9f1ff',
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  headingText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1f3a',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 12,
    borderRadius: 18,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 12,
  },
  online: {
    backgroundColor: '#44c56f',
  },
  offline: {
    backgroundColor: '#c3c8d8',
  },
  userImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
    marginRight: 14,
  },
  userInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1f2937',
    flexShrink: 1,
  },
  messageTime: {
    fontSize: 12,
    color: '#6b7280',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
    color: '#4b5563',
  },
  unreadBubble: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
})