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
import {roomList, tipList} from './data';
import ButtonGlobal from '@app/src/components/globals/ButtonGlobal';
import useNavigationReset from '@app/src/utils/hooks/useNavigationReset';
import {EBottomTabName} from '@app/src/navigation/type';

function OrderScreen() {
  const {params} = useRoute<RouteProp<AppRootParamList, 'OrderScreen'>>();

  const {navigationReset} = useNavigationReset();

  const [roomId, setRoomId] = useState(1);
  const [tipId, setTipId] = useState<number>();

  const handleOrder = () => {
    navigationReset(EBottomTabName.HomeScreen);
  };

  return (
    <View style={styles.root}>
      <View>
        <View style={styles.inforFood}>
          <Animated.Image
            style={styles.image}
            source={{
              uri: params.uri,
            }}
            sharedTransitionTag={`image_food_${params.id}`}
          />
          <View>
            <Text style={styles.name}>Bún bò</Text>
            <Text style={styles.price}>
              <IconEntypo name="credit" size={14} />
              30.000
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
                      roomId === room.id ? themeColor.main : themeColor.border,
                  },
                ]}
                onPress={() => setRoomId(room.id)}>
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
                    borderColor: tipId === tip.id ? themeColor.main : tip.color,
                  },
                ]}
                onPress={() => setTipId(tip.id)}>
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
