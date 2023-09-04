import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import FoodDetailScreen from '@app/src/screens/FoodDetailScreen';
import {ISampleImages} from '../data/images';
import ListFoodScreen from '@app/src/screens/ListFoodScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '@app/src/screens/UserScreen';
import HomeScreen from '@app/src/screens/HomeScreen';
import StatisticalScreen from '../screens/StatisticalScreen';
import {themeColor} from '../config/color';
import OrderScreen from '../screens/OrderScreen';
import {EBottomTabName} from './type';

const Stack = createNativeStackNavigator();

export type AppRootParamList = {
  ListFoodScreen: undefined;
  HomeScreen: undefined;

  FoodDetailScreen: ISampleImages;
  OrderScreen: ISampleImages;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}

function AppNavigation() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: themeColor.background,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName={true ? EBottomTabName.HomeScreen : 'Login'}>
        {/* Bottom Navigation */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{animation: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="ListFoodScreen"
          component={ListFoodScreen}
          options={{animation: 'none'}}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{animation: 'none'}}
        />
        <Stack.Screen
          name="StatisticalScreen"
          component={StatisticalScreen}
          options={{animation: 'none'}}
        />

        {/* Navigation */}
        <Stack.Screen
          name="FoodDetailScreen"
          component={FoodDetailScreen}
          options={{
            title: 'Chi tiết món',
            headerBackTitleVisible: false,
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{
            title: 'Đặt món',
            headerBackTitleVisible: false,
            animation: 'fade',
          }}
        />
      </Stack.Navigator>
      <BottomNavigation />
    </NavigationContainer>
  );
}

export default AppNavigation;
