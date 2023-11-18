import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const DesignPage = () => {
  const storiesData = [
    {
      uid: 1,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'My Story',
    },
    {
      uid: 2,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
      name: 'Yara',
    },
    {
      uid: 3,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'Gil',
    },
    {
      uid: 4,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
      name: 'Ashlie',
    },
    {
      uid: 5,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'Damion',
    },
    {
      uid: 6,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'Gaston',
    },
    {
      uid: 7,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
      name: 'Ben',
    },
  ];

  const chatsData = [
    {
      uid: 1,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'Ben Jelsma',
      message: 'This is a Random Message',
    },
    {
      uid: 2,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
      name: 'Rosanna Uhlenkamp',
      message: 'This is a Random Message',
    },
    {
      uid: 3,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'Gil Braziel',
      message: 'This is a Random Message',
    },
    {
      uid: 4,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
      name: 'Ashlie Lempicki',
      message: 'This is a Random Message',
    },
    {
      uid: 5,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'Kirk Whitrock',
      message: 'This is a Random Message',
    },
    {
      uid: 6,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'Damion Dymerski',
      message: 'This is a Random Message',
    },
    {
      uid: 7,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
      name: 'Emerita Theye',
      message: 'This is a Random Message',
    },
    {
      uid: 8,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'Trinidad Greek',
      message: 'This is a Random Message',
    },
    {
      uid: 9,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
      name: 'Holly Kendrix',
      message: 'This is a Random Message',
    },
    {
      uid: 10,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      name: 'Gaston Obermire',
      message: 'This is a Random Message',
    },
    {
      uid: 11,
      imageurl: 'https://xsgames.co/randomusers/avatar.php?g=female',
      name: 'Dennise Galietta',
      message: 'This is a Random Message',
    },
  ];

  return (
    <View>
      <View style={styles.headerContainer}>
        {/* App name */}
        <View>
          <Text style={styles.header}>MeChat</Text>
        </View>
        {/* Menu Tabs */}

        <View style={styles.menuContainer}>
          <Text style={styles.menuItems}>All Chat</Text>
          <Text style={styles.menuItems}>Group</Text>
          <Text style={styles.menuItems}>Calls</Text>
        </View>
      </View>

      {/* Stories */}
      <View style={styles.storyContainer}>
        <Text style={styles.stories}>Stories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {storiesData.map(({uid, name, imageurl}) => (
            <View key={uid} style={styles.storyCard}>
              <Image source={{uri: imageurl}} style={styles.imageStyle} />
              <Text style={styles.storyName}>{name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* Chats */}
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#F3F2F6',
            borderBottomWidth: 1,
            marginBottom: 20,
            width: '90%',
          }}
        />
      </View>
      <ScrollView>
        {chatsData.map(({uid, name, message, imageurl}) => (
          <View key={uid} style={styles.chatItem}>
            <Image
              source={{
                uri: imageurl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userMessgae}>{message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#8870E6',
    padding: 20,
  },
  header: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  menuItems: {
    fontSize: 19,
    fontWeight: '500',
    color: '#e0d9ff',
    letterSpacing: 1,
  },
  storyContainer: {
    marginBottom: 20,
  },
  stories: {
    fontSize: 18,
    fontWeight: '600',
    padding: 20,
  },
  storyCard: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 20,
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    borderColor: '#6B89F1',
    borderWidth: 2,
    marginBottom: 5,
  },
  storyName: {
    fontSize: 15,
  },
  chatItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 25,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
  },
  userName: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 5,
  },
  userMessgae: {
    fontSize: 14,
    color: '#b5b4b8',
    fontWeight: '500',
  },
});

export default DesignPage;
