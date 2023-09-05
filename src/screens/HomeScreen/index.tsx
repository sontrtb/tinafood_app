import React, {Fragment, useMemo} from 'react';
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

const image = {
  uri: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong-577x600.jpg',
};

function HomeScreen() {
  const {navigationReset} = useNavigationReset();

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
      },
    ],
    [],
  );

  return (
    <ScrollView style={styles.root}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imageBackground}>
        <Text style={styles.logo}>TinaFood</Text>
      </ImageBackground>

      <Animated.View
        style={styles.buttonOrderWrap}
        entering={BounceIn}
        exiting={BounceOut}>
        <ButtonGlobal
          title="Đặt món ngay"
          type="secondary"
          style={styles.buttonOrder}
          onPress={() => navigationReset(EBottomTabName.ListFoodScreen)}
        />
      </Animated.View>

      <View style={styles.content}>
        <View style={styles.cardWrap}>
          {listCard.map((card, index) => (
            <Fragment key={index}>
              <BackgroundCard>
                {card.icon}
                <Text style={styles.textCard}>{card.name}</Text>
              </BackgroundCard>
            </Fragment>
          ))}
        </View>

        <Countdown />
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
