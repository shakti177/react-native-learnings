import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCards = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Hawa Mahal {'\u002D'} "Palace of Winds"
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-469786746_super.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
          <Text numberOfLines={4}>
            Hawa Mahal, also known as “Palace of Breeze”, was built in 1799 as
            an extension to the Royal City Palace of Jaipur. It allows the royal
            ladies who at the time strictly observed “pardah”, to be able to
            watch any processions and activities on the street without being
            seen by the public.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://en.wikipedia.org/wiki/Hawa_Mahal')
            }>
            <Text style={styles.footerButton}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  card: {
    height: 360,
    width: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#F1B4BB',
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 180,
  },
  cardBodyContainer: {
    padding: 15,
  },
  footerContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  footerButton: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});

export default ActionCards;
