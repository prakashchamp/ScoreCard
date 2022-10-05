import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import MatchList from '../components/MatchList';
import OverallStats from '../components/OverallStats';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <OverallStats />
      <MatchList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    widths: '100%',
    backgroundColor: '#2c3e50',
  },
});

export default MainScreen;
