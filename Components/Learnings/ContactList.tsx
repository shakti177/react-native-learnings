import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  RootTagContext,
} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Shakti Tamrakar',
      status: 'Learning React Native',
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    {
      uid: 2,
      name: 'Kritik Hedau',
      status: 'Working in MNC',
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    {
      uid: 3,
      name: 'Gyanendra Tiwari',
      status: 'Preparing for Doing MBA',
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    {
      uid: 4,
      name: 'Shruti Pushpkar',
      status: 'Preparing for Doing MBA',
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
    },
    {
      uid: 5,
      name: 'Shweta Thakur',
      status: 'Doing Internship in Indore',
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({uid, name, status, imageurl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageurl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    padding: 8,
    backgroundColor: '#574AE2',
    borderRadius: 12,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userStatus: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default ContactList;
