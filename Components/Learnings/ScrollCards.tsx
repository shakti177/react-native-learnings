import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ScrollCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ScrollCards</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={[styles.card, styles.scrollcard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.scrollcard]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.scrollcard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.scrollcard]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.scrollcard]}>
          <Text>More</Text>
        </View>
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
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  scrollcard: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: '#032cfc',
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
});

export default ScrollCards;
