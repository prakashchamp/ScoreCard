import React from 'react';
import { FlatList, View } from 'react-native';
import Match from './Match';

const MatchList = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }}>
      <FlatList
        data={[
          { key: 1 },
          { key: 2 },
          { key: 3 },
          { key: 4 },
          { key: 5 },
          { key: 6 },
          { key: 7 },
          { key: 8 },
        ]}
        renderItem={({ item }) => <Match key={item.key} />}
      />
    </View>
  );
};

export default MatchList;
