import {windowWidth} from '@app/src/utils/layout';
import {paddingHorizontal} from '@app/src/config/layout';
import {StyleSheet} from 'react-native';
import {themeColor} from '@app/src/config/color';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  inforFood: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: paddingHorizontal,
    paddingVertical: 10,
    backgroundColor: themeColor.main,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
    color: themeColor.secondaryText,
  },
  price: {
    color: themeColor.secondaryText,
  },

  inforOrder: {
    paddingHorizontal: paddingHorizontal,
    paddingTop: 15,
  },
  textLabel: {
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 15,
  },

  roomWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  room: {
    width: windowWidth / 2 - 20,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: themeColor.border,
    padding: 5,
  },
  imageRoom: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  textRoom: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },

  tipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tip: {
    width: windowWidth / 3 - 15,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
  },
  tipText: {
    color: themeColor.secondaryText,
    fontWeight: '700',
  },

  buttonConfirm: {
    marginHorizontal: paddingHorizontal,
  },
});

export {styles};
