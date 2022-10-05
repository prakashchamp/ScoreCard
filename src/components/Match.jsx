import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Match = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.block}>
          <Text>Runs</Text>
          <Text>4</Text>
        </View>
        <View style={styles.block}>
          <Text>Balls</Text>
          <Text>4</Text>
        </View>
        <View style={styles.block}>
          <Text>4s</Text>
          <Text>4</Text>
        </View>
        <View style={styles.block}>
          <Text>6s</Text>
          <Text>4</Text>
        </View>
        <View style={styles.block}>
          <Text>S.R.</Text>
          <Text>4</Text>
        </View>
        <View style={styles.block}>
          <Text>N.O.</Text>
          <Text>4</Text>
        </View>
      </View>
      <View style={styles.matchDetails}>
        <Text style={styles.opponent}>
          Against Pakistan (12 overs) - 15/2/2020
        </Text>
        <Text style={styles.result}>Won by 6 wickets</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    height: '14%',
    marginVertical: '1%',
    marginHorizontal: '3%',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 8,
  },
  scoreContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.8,
    borderBottomColor: 'black',
    paddingBottom: 4,
  },
  block: {
    width: '15%',
    margin: 3,
  },
  opponent: {
    marginVertical: 1,
  },
  result: {
    marginVertical: 1,
  },
});

export default Match;
