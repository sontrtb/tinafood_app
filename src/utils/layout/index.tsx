import {Dimensions, StatusBar} from 'react-native';

export const windowHeight = Dimensions.get('window').height;

export const windowWidth = Dimensions.get('window').width;

export const deviceHeight = Dimensions.get('screen').height;

export const deviceWidth = Dimensions.get('screen').width;

export const windowHeightStatusBar = StatusBar.currentHeight || 40;

export const windowHeightByPercentage = (percentage: number): number => {
  return Dimensions.get('window').width * percentage;
};
