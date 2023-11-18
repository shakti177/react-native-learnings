import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Task_1 = () => {
  const data = [
    {id: 1, name: 'ACIDITY'},
    {id: 2, name: 'AHU'},
    {id: 3, name: 'ALGAE'},
    {id: 4, name: 'ALKALINITY'},
    {id: 5, name: 'ALUMINIUM'},
    {id: 6, name: 'AMINE'},
    {id: 7, name: 'AMMONIA'},
    {id: 8, name: 'AQUACULTURE'},
    {id: 9, name: 'ARSENIC'},
    {id: 10, name: 'BIOCIDE'},
    {id: 11, name: 'BOILER'},
    {id: 12, name: 'BROMINE'},
    {id: 13, name: 'PHENOLPHTHALEIN'},
    {id: 14, name: 'WATER'},
    {id: 15, name: 'DIOXIDE'},
    {id: 16, name: 'CHROMATE'},
    {id: 17, name: 'CONSTRUCTION'},
    {id: 18, name: 'HARDNESS'},
    {id: 19, name: 'CALCIUM'},
    {id: 20, name: 'COLIFORM'},
    {id: 21, name: 'FLUORIDE'},
    {id: 22, name: 'HYDRAZINE'},
    {id: 23, name: 'FURNACE'},
    {id: 24, name: 'CHLORINE'},
    {id: 25, name: 'DRINKING'},
    {id: 26, name: 'ACIDITY'},
    {id: 27, name: 'AHU'},
    {id: 28, name: 'ALGAE'},
    {id: 29, name: 'ALKALINITY'},
    {id: 30, name: 'ALUMINIUM'},
    {id: 31, name: 'AMINE'},
    {id: 32, name: 'AMMONIA'},
    {id: 33, name: 'AQUACULTURE'},
    {id: 34, name: 'ARSENIC'},
    {id: 35, name: 'BIOCIDE'},
    {id: 36, name: 'BOILER'},
    {id: 37, name: 'BROMINE'},
    {id: 38, name: 'PHENOLPHTHALEIN'},
    {id: 39, name: 'WATER'},
    {id: 40, name: 'DIOXIDE'},
    {id: 41, name: 'CHROMATE'},
    {id: 42, name: 'CONSTRUCTION'},
    {id: 43, name: 'HARDNESS'},
    {id: 44, name: 'CALCIUM'},
    {id: 45, name: 'COLIFORM'},
    {id: 46, name: 'FLUORIDE'},
    {id: 47, name: 'HYDRAZINE'},
    {id: 48, name: 'FURNACE'},
    {id: 49, name: 'CHLORINE'},
    {id: 50, name: 'DRINKING'},
  ];

  return (
    <View>
      <View style={styles.container}>
        {data.map(({id, name}) => (
          <View key={id} style={styles.button}>
            <View style={styles.box}>
              <TouchableOpacity>
                <Text style={styles.boxname}>{name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Task_1;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    padding: 10,
  },
  box: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  boxname: {
    fontSize: 17,
    fontWeight: '600',
  },
});
