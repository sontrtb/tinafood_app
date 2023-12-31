import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import FoodDetailScreen from '@app/src/screens/FoodDetailScreen';
import ListFoodScreen from '@app/src/screens/ListFoodScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '@app/src/screens/UserScreen';
import HomeScreen from '@app/src/screens/HomeScreen';
import StatisticalScreen from '../screens/StatisticalScreen';
import {themeColor} from '../config/color';
import OrderScreen from '../screens/OrderScreen';
import LoginScreen from '../screens/LoginScreen';
import {useIsLogin} from '../redux/Auth/hooks';
import {IFood} from '../api/apiFood';
import {useQuery} from 'react-query';
import {queryKey} from '../api/queryKey';
import {getMe} from '../api/apiUser';
import {useAppDispatch} from '../redux/hook';
import {setUser} from '../redux/User/slice';

const Stack = createNativeStackNavigator();

export type AppRootParamList = {
  ListFoodScreen: undefined;
  HomeScreen: undefined;

  FoodDetailScreen: IFood;
  OrderScreen: IFood;
  LoginScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}

function AppNavigation() {
  const dispatch = useAppDispatch();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: themeColor.background,
    },
  };

  const isLogin = useIsLogin();

  useQuery(queryKey.ME, getMe, {
    enabled: isLogin,
    onSuccess: res => {
      dispatch(setUser(res));
    },
  });

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName={isLogin ? 'HomeScreen' : 'LoginScreen'}>
        {/* Bottom Navigation */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{animation: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="ListFoodScreen"
          component={ListFoodScreen}
          options={{animation: 'none', title: 'Danh sách món'}}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{animation: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="StatisticalScreen"
          component={StatisticalScreen}
          options={{animation: 'none', title: 'Danh sách đặt'}}
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
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            animation: 'fade',
          }}
        />
      </Stack.Navigator>
      <BottomNavigation />
    </NavigationContainer>
  );
}

export default AppNavigation;
