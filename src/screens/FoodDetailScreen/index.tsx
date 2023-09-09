import ButtonGlobal from '@app/src/components/globals/ButtonGlobal';
import {themeColor} from '@app/src/config/color';
import {paddingHorizontal} from '@app/src/config/layout';
import {AppRootParamList} from '@app/src/navigation';
import {windowHeight} from '@app/src/utils/layout';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {SlideInDown, SlideOutDown} from 'react-native-reanimated';
import IconEntypo from 'react-native-vector-icons/Entypo';

function FoodDetailScreen() {
  const {params} = useRoute<RouteProp<AppRootParamList, 'FoodDetailScreen'>>();

  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <Animated.Image
        style={styles.image}
        source={{
          uri: `https://generatorfun.com/code/uploads/Random-Food-image-${params.id}.jpg`,
        }}
        sharedTransitionTag={`image_food_${params.id}`}
      />
      <View style={styles.textNoteWrap}>
        <Text style={styles.textNote}>
          *Hình ảnh chỉ mang tính chất minh hoạ
        </Text>
      </View>

      <Animated.View
        entering={SlideInDown}
        exiting={SlideOutDown}
        style={styles.content}>
        <View>
          <Text style={styles.name}>{params.displayName}</Text>
          <Text style={styles.price}>
            <IconEntypo name="credit" size={18} />
            {params.price}.000đ
          </Text>

          <Text style={styles.des}>
            Món ăn ngon chỉ có trên TinaFood 👈. Bữa cơm cả công ty thích thú,
            thực đơn đa dạng, hấp dẫn.
          </Text>
        </View>

        <ButtonGlobal
          title="Đặt món"
          type="secondary"
          style={{width: '100%'}}
          onPress={() => navigation.navigate('OrderScreen', params)}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: themeColor.main,
  },
  image: {
    width: '100%',
    height: windowHeight * 0.4,
  },
  textNoteWrap: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  textNote: {
    fontSize: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: paddingHorizontal,
    paddingTop: paddingHorizontal,
    paddingBottom: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  name: {
    fontWeight: '700',
    fontSize: 24,
    color: themeColor.secondaryText,
  },
  price: {
    color: themeColor.secondaryText,
    fontSize: 16,
  },
  des: {
    color: themeColor.thirdText,
    marginTop: 15,
  },
});

export default FoodDetailScreen;
