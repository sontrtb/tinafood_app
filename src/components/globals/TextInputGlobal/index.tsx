import {themeColor} from '@app/src/config/color';
import React, {ReactNode} from 'react';
import {TextInput, TextInputProps, View, StyleSheet} from 'react-native';

interface ITextInputGlobal extends TextInputProps {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

function TextInputGlobal(
  props: ITextInputGlobal,
  ref?: React.LegacyRef<TextInput>,
) {
  const {iconStart, iconEnd, style} = props;

  return (
    <View style={[styles.textInputGlobal, style]}>
      {iconStart}
      <TextInput {...props} ref={ref} style={styles.input} />
      {iconEnd}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputGlobal: {
    paddingHorizontal: 13,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: themeColor.main,
  },
  input: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    maxHeight: 100,
    minHeight: 40,
    flex: 1,
  },
});

export default React.forwardRef(TextInputGlobal);
