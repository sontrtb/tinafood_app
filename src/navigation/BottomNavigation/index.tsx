import TouchableGlobal from '@app/src/components/globals/TouchableGlobal';
import {themeColor} from '@app/src/config/color';
import {HEIGHT_BOTTOM_BAR} from '@app/src/config/layout';
import useNavigationReset from '@app/src/utils/hooks/useNavigationReset';
import React, {memo, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

function BottomNavigation() {
  const {navigationReset} = useNavigationReset();

  const [focus, setFocus] = useState('HomeScreen');

  const translateXFocus = useSharedValue(-18);

  const listBottomNavigation = useMemo(
    () => [
      {
        routeName: 'HomeScreen',
        icon: (
          <IconAntDesign
            name="home"
            size={25}
            color={focus === 'HomeScreen' ? '#fff' : themeColor.disable}
          />
        ),
      },
      {
        routeName: 'ListFoodScreen',
        icon: (
          <IconAntDesign
            name="bars"
            size={25}
            color={focus === 'ListFoodScreen' ? '#fff' : themeColor.disable}
          />
        ),
      },
      {
        routeName: 'StatisticalScreen',
        icon: (
          <IconAntDesign
            name="table"
            size={25}
            color={focus === 'StatisticalScreen' ? '#fff' : themeColor.disable}
          />
        ),
      },
      {
        routeName: 'UserScreen',
        icon: (
          <IconFontAwesome
            name="user"
            size={25}
            color={focus === 'UserScreen' ? '#fff' : themeColor.disable}
          />
        ),
      },
    ],
    [focus],
  );

  const backgroundFocusStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateXFocus.value}],
    };
  });

  return (
    <View style={styles.root}>
      {listBottomNavigation.map((navigationItem, index) => {
        return (
          <TouchableGlobal
            key={index}
            style={styles.navigationItem}
            onPress={() => {
              navigationReset(navigationItem.routeName);
              setFocus(navigationItem.routeName);
              translateXFocus.value = withTiming(index * 90 - 18, {
                duration: 500,
                easing: Easing.elastic(1.2),
              });
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
