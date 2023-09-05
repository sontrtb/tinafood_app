import {themeColor} from '@app/src/config/color';
import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useCountdown from '@app/src/utils/hooks/useCountdown';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {windowWidth} from '@app/src/utils/layout';

function Countdown() {
  const {timeCountdown, isRun} = useCountdown();

  return (
    <View style={styles.root}>
      {isRun && <Text style={styles.text}>Thời gian còn lại:</Text>}
      <View style={styles.time}>
        {!isRun && <IconFontAwesome5 name="crown" size={28} color="#fde047" />}
        <Text style={styles.textTime} numberOfLines={1}>
          {isRun ? timeCountdown : 'Phạm Hồng Sơn'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 15,
    height: 65,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themeColor.main,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: themeColor.secondaryMain,
  },
  textTime: {
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 28,
    marginLeft: 10,
    color: themeColor.main,
    maxWidth: windowWidth - 100,
  },
});

export default memo(Countdown);
