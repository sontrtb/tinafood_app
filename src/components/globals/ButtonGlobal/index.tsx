import React, {memo} from 'react';
import TouchableGlobal from '../TouchableGlobal';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {themeColor} from '@app/src/config/color';

interface IButtonGlobalProps {
  title: string;
  type?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

function ButtonGlobal(props: IButtonGlobalProps) {
  const {title, type, style, onPress} = props;

  let styleButtonWrap;
  switch (type) {
    case 'secondary':
      styleButtonWrap = styles.buttonSecondary;
      break;
    default:
      styleButtonWrap = styles.buttonPrimary;
  }

  let styleTextButton;
  switch (type) {
    case 'secondary':
      styleTextButton = styles.textSecondary;
      break;
    default:
      styleTextButton = styles.textPrimary;
  }

  return (
    <View style={styles.root}>
      <TouchableGlobal
        style={[styles.button, styleButtonWrap, style]}
        onPress={onPress}>
        <Text style={[styles.text, styleTextButton]}>{title}</Text>
      </TouchableGlobal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonSecondary: {
    backgroundColor: themeColor.background,
  },
  buttonPrimary: {
    backgroundColor: themeColor.main,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textSecondary: {
    color: themeColor.main,
  },
  textPrimary: {
    color: themeColor.background,
  },
});

export default memo(ButtonGlobal);
