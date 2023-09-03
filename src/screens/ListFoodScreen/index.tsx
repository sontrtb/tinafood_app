import React from 'react';
import {FlatList, StyleSheet, View, ViewToken} from 'react-native';
import FoodCard from './FoodCard';
import {paddingHorizontal} from '@app/src/config/layout';
import {useSharedValue} from 'react-native-reanimated';
import {sampleImages} from '@app/src/data/images';

function ListFoodScreen() {
  const viewableItemsVal = useSharedValue<ViewToken[]>([]);

  return (
    <View style={styles.root}>
      <FlatList
        onViewableItemsChanged={e => {
          viewableItemsVal.value = e.viewableItems;
        }}
        data={sampleImages}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <FoodCard item={item} viewableItemsVal={viewableItemsVal} />
        )}
        keyExtractor={item => `key_${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: paddingHorizontal - 5,
  },
});

export default ListFoodScreen;
