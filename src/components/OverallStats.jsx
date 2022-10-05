import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const OverallStats = () => {
  return (
    <View style={styles.container}>
      <Text>Matches - 78</Text>
      <View style={styles.layout}>
        <View style={styles.block}>
          <Text>Runs</Text>
          <Text>1234</Text>
        </View>
        <View style={styles.block}>
          <Text>Balls</Text>
          <Text>2341</Text>
        </View>
        <View style={styles.block}>
          <Text>4s</Text>
          <Text>32</Text>
        </View>
        <View style={styles.block}>
          <Text>6s</Text>
          <Text>23</Text>
        </View>
        <View style={styles.block}>
          <Text>S.R.</Text>
          <Text>123.23</Text>
        </View>
        <View style={styles.block}>
          <Text>Avg.</Text>
          <Text>123.23</Text>
        </View>
        <View style={styles.block}>
          <Text>H.S.</Text>
          <Text>65</Text>
        </View>
        <View style={styles.block}>
          <Text>30+</Text>
          <Text>12</Text>
        </View>
        <View style={styles.block}>
          <Text>50+</Text>
          <Text>4</Text>
        </View>
        <View style={styles.block}>
          <Text>N.O.</Text>
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '16%',
    marginVertical: '3%',
    marginHorizontal: '3%',
    backgroundColor: 'grey',
    padding: 6,
    borderRadius: 8,
  },
  layout: {
    flexWrap: 'wrap',
    alignContent: 'space-around',
  },
  block: {
    width: '15%',
    margin: 3,
  },
});

export default OverallStats;
