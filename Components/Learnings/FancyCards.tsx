import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://img.peapix.com/cc7cb0188db44f9ab972bf2e5deb83c3.jpg?attachment&modal',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace,
            Jaipur.
          </Text>
          <Text style={styles.cardFooter}>12 min Away</Text>
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
    width: 360,
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    elevation: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: '#FFFADD',
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '500',
  },
  cardDescription: {
    fontSize: 15,
    marginBottom: 13,
    marginTop: 8,
  },
  cardFooter: {},
});

export default FancyCards;
