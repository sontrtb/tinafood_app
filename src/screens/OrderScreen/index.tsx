import TouchableGlobal from '@app/src/components/globals/TouchableGlobal';
import {themeColor} from '@app/src/config/color';
import {AppRootParamList} from '@app/src/navigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {ITip, roomList, tipList} from './data';
import ButtonGlobal from '@app/src/components/globals/ButtonGlobal';
import useNavigationReset from '@app/src/utils/hooks/useNavigationReset';
import {EBottomTabName} from '@app/src/navigation/type';
import {useMutation} from 'react-query';
import {createBooking} from '@app/src/api/apiBooking';
import getSession from '@app/src/utils/action/getSession';
import {showToast} from '@app/src/utils/toats';

function OrderScreen() {
  const {params} = useRoute<RouteProp<AppRootParamList, 'OrderScreen'>>();

  const {navigationReset} = useNavigationReset();

  const [roomSelect, setRoom] = useState(roomList[0]);
  const [tipSelect, setTip] = useState<ITip>();

  const createBookingMutation = useMutation(createBooking);
  const handleOrder = () => {
    if (!params.id || !params.price) {
      showToast('Có lỗi xảy ra');
      return;
    }
    console.log('sdsd', {
      session: getSession() === 1 ? 'Lunch' : 'Dinner',
      room: roomSelect.name,
      foodId: params.id,
      price: params.price,
      tip: tipSelect?.value ?? 0,
    });
    createBookingMutation.mutate(
      {
        session: getSession() === 1 ? 'Lunch' : 'Dinner',
        room: roomSelect.value,
        foodId: params.id,
        price: params.price,
        tip: tipSelect?.value ?? 0,
      },
      {
        onSuccess: () => {
          showToast(`Bạn đã đặt: ${params.displayName} thành công`);
          navigationReset(EBottomTabName.HomeScreen);
        },
      },
    );
  };

  return (
    <View style={styles.root}>
      <View>
        <View style={styles.inforFood}>
          <Animated.Image
            style={styles.image}
            source={{
              uri: `https://generatorfun.com/code/uploads/Random-Food-image-${params.id}.jpg`,
            }}
            sharedTransitionTag={`image_food_${params.id}`}
          />
          <View>
            <Text style={styles.name}>{params.displayName}</Text>
            <Text style={styles.price}>
              <IconEntypo name="credit" size={14} />
              {params.price}.000
            </Text>
          </View>
        </View>

        <View style={styles.inforOrder}>
          <Text style={styles.textLabel}>Phòng</Text>
          <View style={styles.roomWrap}>
            {roomList.map(room => (
              <TouchableGlobal
                key={room.id}
                style={[
                  styles.room,
                  {
                    borderColor:
                      roomSelect.id === room.id
                        ? themeColor.main
                        : themeColor.border,
                  },
                ]}
                onPress={() => setRoom(room)}>
                <FastImage
                  style={styles.imageRoom}
                  source={{
                    uri: room.image,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <Text style={styles.textRoom}>{room.name}</Text>
              </TouchableGlobal>
            ))}
          </View>

          <Text style={styles.textLabel}>Tip</Text>
          <View style={styles.tipWrap}>
            {tipList.map(tip => (
              <TouchableGlobal
                key={tip.id}
                style={[
                  styles.tip,
                  {
                    backgroundColor: tip.color,
                    borderColor:
                      tipSelect?.id === tip.id ? themeColor.main : tip.color,
                  },
                ]}
                onPress={() => setTip(tip)}>
                <Text style={styles.tipText}>{tip.name}</Text>
              </TouchableGlobal>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.buttonConfirm}>
        <ButtonGlobal title="Xác nhận" onPress={handleOrder} />
      </View>
    </View>
  );
}

export default OrderScreen;
