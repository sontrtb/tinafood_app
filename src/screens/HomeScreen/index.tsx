import React, {useCallback, useMemo} from 'react';
import {themeColor} from '@app/src/config/color';
import {paddingHorizontal} from '@app/src/config/layout';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {windowHeightStatusBar, windowWidth} from '@app/src/utils/layout';
import ButtonGlobal from '@app/src/components/globals/ButtonGlobal';
import BackgroundCard from './components/BackgroundCard';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Countdown from './components/Countdown';
import Animated, {BounceIn, BounceOut} from 'react-native-reanimated';
import useNavigationReset from '@app/src/utils/hooks/useNavigationReset';
import {EBottomTabName} from '@app/src/navigation/type';
import {handleRecharge} from '@app/src/utils/action/recharge';
import TouchableGlobal from '@app/src/components/globals/TouchableGlobal';
import {getListBooking} from '@app/src/api/apiBooking';
import {useQuery} from 'react-query';
import moment from 'moment';
import {queryKey} from '@app/src/api/queryKey';
import {useUser} from '@app/src/redux/User/hooks';
import getSession from '@app/src/utils/action/getSession';

const image = require('@app/src/assets/image/order_now.jpeg');

function HomeScreen() {
  const {navigationReset} = useNavigationReset();

  const user = useUser();

  const params = {
    bookDate: moment().format('YYYY-MM-DD'),
    session: getSession(),
  };
  const getDataListBooking = () => getListBooking(params);
  const {data, refetch} = useQuery(
    [queryKey.LIST_BOOKING, params],
    getDataListBooking,
  );

  const dataConvert = useMemo(() => {
    const userChoose =
      data?.find(item => item.isChosen)?.createdBy?.username ?? '-----';
    const myFood = data?.find(
      item => item.createdBy?.username === user.username,
    )?.food;

    return {
      userChoose: userChoose,
      myFood: myFood,
    };
  }, [data, user.username]);

  const handleOrderNow = useCallback(() => {
    if (dataConvert.myFood) {
    } else {
      navigationReset(EBottomTabName.ListFoodScreen);
    }
  }, [dataConvert.myFood, navigationReset]);

  const listCard = useMemo(
    () => [
      {
        name: 'Nạp tiền',
        icon: (
          <IconFontAwesome5
            name="exchange-alt"
            size={22}
            color={themeColor.secondaryText}
          />
        ),
        onPress: handleRecharge,
      },
      {
        name: 'Ủng hộ admin',
        icon: (
          <IconFontAwesome5
            name="money-bill-wave"
            size={22}
            color={themeColor.secondaryText}
          />
        ),
        onPress: handleRecharge,
      },
      {
        name: 'Nạp tiền',
        icon: (
          <IconFontAwesome5
            name="exchange-alt"
            size={22}
            color={themeColor.secondaryText}
          />
        ),
        onPress: handleRecharge,
      },
      {
        name: 'Nạp tiền',
        icon: (
          <IconFontAwesome5
            name="exchange-alt"
            size={22}
            color={themeColor.secondaryText}
          />
        ),
        onPress: handleRecharge,
      },
    ],
    [],
  );

  return (
    <ScrollView style={styles.root}>
      <ImageBackground
        source={
          dataConvert.myFood
            ? {
                uri: `https://generatorfun.com/code/uploads/Random-Food-image-${dataConvert.myFood?.id}.jpg`,
              }
            : image
        }
        resizeMode="cover"
        style={styles.imageBackground}>
        <Text style={styles.logo}>TinaFood</Text>
      </ImageBackground>

      <Animated.View
        style={styles.buttonOrderWrap}
        entering={BounceIn}
        exiting={BounceOut}>
        <ButtonGlobal
          title={
            dataConvert.myFood
              ? `Bạn đã đặt: ${dataConvert.myFood.displayName}`
              : 'Đặt món ngay'
          }
          type="secondary"
          style={styles.buttonOrder}
          onPress={handleOrderNow}
        />
      </Animated.View>

      <View style={styles.content}>
        <View style={styles.cardWrap}>
          {listCard.map((card, index) => (
            <TouchableGlobal key={index} onPress={card.onPress}>
              <BackgroundCard>
                {card.icon}
                <Text style={styles.textCard}>{card.name}</Text>
              </BackgroundCard>
            </TouchableGlobal>
          ))}
        </View>

        <Countdown userChoose={dataConvert.userChoose} refetch={refetch} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageBackground: {
    width: windowWidth,
    height: windowWidth,
  },
  logo: {
    marginTop: windowHeightStatusBar,
    paddingHorizontal: paddingHorizontal,
    fontWeight: '700',
    fontSize: 32,
    color: themeColor.main,
  },

  buttonOrderWrap: {
    paddingHorizontal: paddingHorizontal,
    position: 'absolute',
    top: windowWidth - 20,
  },
  buttonOrder: {
    height: 65,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  content: {
    paddingHorizontal: paddingHorizontal,
    marginTop: 45,
  },

  cardWrap: {
    marginTop: paddingHorizontal,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  textCard: {
    color: themeColor.secondaryText,
    fontWeight: '700',
    fontSize: 16,
    marginTop: 5,
  },
});

export default HomeScreen;
