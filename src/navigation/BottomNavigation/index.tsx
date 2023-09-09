import TouchableGlobal from '@app/src/components/globals/TouchableGlobal';
import {themeColor} from '@app/src/config/color';
import {HEIGHT_BOTTOM_BAR} from '@app/src/config/layout';
import {useFocusBottomTab} from '@app/src/redux/FocusBottomTab/hooks';
import useNavigationReset from '@app/src/utils/hooks/useNavigationReset';
import React, {memo, useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {EBottomTabName} from '../type';
import {useIsLogin} from '@app/src/redux/Auth/hooks';

const arrBottom = [
  EBottomTabName.HomeScreen,
  EBottomTabName.ListFoodScreen,
  EBottomTabName.StatisticalScreen,
  EBottomTabName.UserScreen,
];

function BottomNavigation() {
  const {navigationReset} = useNavigationReset();

  const focus = useFocusBottomTab();
  const isLogin = useIsLogin();

  const translateXFocus = useSharedValue(-18);

  const listBottomNavigation = useMemo(
    () => [
      {
        routeName: EBottomTabName.HomeScreen,
        icon: (
          <IconAntDesign
            name="home"
            size={25}
            color={
              focus === EBottomTabName.HomeScreen ? '#fff' : themeColor.disable
            }
          />
        ),
      },
      {
        routeName: EBottomTabName.ListFoodScreen,
        icon: (
          <IconAntDesign
            name="bars"
            size={25}
            color={
              focus === EBottomTabName.ListFoodScreen
                ? '#fff'
                : themeColor.disable
            }
          />
        ),
      },
      {
        routeName: EBottomTabName.StatisticalScreen,
        icon: (
          <IconAntDesign
            name="table"
            size={25}
            color={
              focus === EBottomTabName.StatisticalScreen
                ? '#fff'
                : themeColor.disable
            }
          />
        ),
      },
      {
        routeName: EBottomTabName.UserScreen,
        icon: (
          <IconFontAwesome
            name="user"
            size={25}
            color={
              focus === EBottomTabName.UserScreen ? '#fff' : themeColor.disable
            }
          />
        ),
      },
    ],
    [focus],
  );

  useEffect(() => {
    listBottomNavigation.forEach((bottom, index) => {
      if (bottom.routeName === focus) {
        translateXFocus.value = withTiming(index * 90 - 18, {
          duration: 500,
          easing: Easing.elastic(1.2),
        });
        return;
      }
    });
  }, [focus, listBottomNavigation, translateXFocus]);

  const backgroundFocusStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateXFocus.value}],
    };
  });

  if (!arrBottom.includes(focus) || !isLogin) {
    return null;
  }

  return (
    <View style={styles.root}>
      {listBottomNavigation.map((navigationItem, index) => {
        return (
          <TouchableGlobal
            key={index}
            style={styles.navigationItem}
            onPress={() => {
              navigationReset(navigationItem.routeName);
            }}>
            {navigationItem.icon}
          </TouchableGlobal>
        );
      })}
      <Animated.View style={[styles.backgroundFocus, backgroundFocusStyles]} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: HEIGHT_BOTTOM_BAR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    marginHorizontal: 50,
  },
  navigationItem: {
    zIndex: 2,
  },
  backgroundFocus: {
    height: 34,
    width: 60,
    backgroundColor: themeColor.main,
    position: 'absolute',
    top: 8,
    borderRadius: 20,
  },
});

export default memo(BottomNavigation);
