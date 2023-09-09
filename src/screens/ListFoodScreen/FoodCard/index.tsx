import TouchableGlobal from '@app/src/components/globals/TouchableGlobal';
import React, {useCallback} from 'react';
import {StyleSheet, Text, View, ViewToken} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {themeColor} from '@app/src/config/color';
import {IFood} from '@app/src/api/apiFood';

interface IFoodCardProps {
  item: IFood;
  viewableItemsVal: SharedValue<ViewToken[]>;
}

function FoodCard(props: IFoodCardProps) {
  const {item, viewableItemsVal} = props;

  const navigation = useNavigation();

  const animatedStyles = useAnimatedStyle(() => {
    const isViewable = viewableItemsVal.value.find(i => i.item.id === item.id);
    return {
      opacity: withTiming(isViewable ? 1 : 0),
      transform: [{scale: withTiming(isViewable ? 1 : 0.5)}],
    };
  });

  const handleOpenDetail = useCallback(() => {
    navigation.navigate('FoodDetailScreen', item);
  }, [item, navigation]);

  return (
    <Animated.View style={animatedStyles}>
      <TouchableGlobal style={styles.root} onPress={handleOpenDetail}>
        <Animated.Image
          style={styles.image}
          source={{
            uri: `https://generatorfun.com/code/uploads/Random-Food-image-${item.id}.jpg`,
          }}
          sharedTransitionTag={`image_food_${item.id}`}
        />

        <View style={styles.content}>
          <View>
            <Text style={styles.name}>{item.displayName}</Text>
            <Text style={styles.des}>Đặt anh Hiệp</Text>
          </View>
          <Text style={styles.price}>{item.price}.000đ</Text>
        </View>
      </TouchableGlobal>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: themeColor.main,

    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: 10,
    width: '100%',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 4,
    color: themeColor.secondaryText,
  },
  des: {
    fontSize: 12,
    color: themeColor.thirdText,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: themeColor.secondaryText,
  },
});

export default FoodCard;
