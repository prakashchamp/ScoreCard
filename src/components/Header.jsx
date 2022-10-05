import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddIcon from './AddIcon';

const Header = () => {
  return (
    <View style={styles.header}>
      <AddIcon />
      <Text style={styles.headerText}>Prakash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: '10%',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 26,
    marginLeft: '30%',
  },
});

export default Header;
