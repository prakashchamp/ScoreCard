import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import NewEntryModal from './NewEntryModal';

export default function AddIcon() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    console.log('Open modal');
    setModalVisible(true);
  };

  const closeModel = () => {
    console.log('Close modal');
    setModalVisible(false);
  };

  return (
    <TouchableOpacity style={styles.iconBox} onPress={openModal}>
      <Text style={styles.icon}>+</Text>
      <NewEntryModal modalVisible={modalVisible} closeModel={closeModel} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    height: 35,
    width: 35,
    borderWidth: 1.2,
    borderColor: 'white',
    borderRadius: 50,
    alignSelf: 'center',
    padding: 1,
    borderStyle: 'dashed',
  },
  icon: {
    color: 'green',
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    transform: [{ translateY: -6.5 }, { translateX: 0 }],
  },
});
