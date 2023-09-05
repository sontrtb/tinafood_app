import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View, ViewToken} from 'react-native';
import FoodCard from './FoodCard';
import {paddingHorizontal} from '@app/src/config/layout';
import {useSharedValue} from 'react-native-reanimated';
import {useQuery} from 'react-query';
import {queryKey} from '@app/src/api/queryKey';
import {getListFood} from '@app/src/api/apiFood';

function ListFoodScreen() {
  const viewableItemsVal = useSharedValue<ViewToken[]>([]);

  const getListFoodQuery = useQuery(queryKey.LIST_FOOD, getListFood);

  const onViewableItemsChanged = useCallback(
    (e: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      viewableItemsVal.value = e.viewableItems;
    },
    [viewableItemsVal],
  );

  if (getListFoodQuery.isLoading) {
    return null;
  }

  return (
    <View style={styles.root}>
      <FlatList
        onViewableItemsChanged={onViewableItemsChanged}
        data={getListFoodQuery.data}
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
