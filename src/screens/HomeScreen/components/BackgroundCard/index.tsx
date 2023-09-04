import TouchableGlobal from '@app/src/components/globals/TouchableGlobal';
import {themeColor} from '@app/src/config/color';
import {paddingHorizontal} from '@app/src/config/layout';
import {windowWidth} from '@app/src/utils/layout';
import {
  Canvas,
  LinearGradient,
  RoundedRect,
  vec,
} from '@shopify/react-native-skia';
import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

const widthCard = (windowWidth - paddingHorizontal * 2) / 2 - 5;
const heightCard = widthCard * 0.6;

interface IBackgroundCardProps {
  children: ReactNode;
}

function BackgroundCard({children}: IBackgroundCardProps) {
  return (
    <View style={styles.root}>
      <Canvas style={styles.root}>
        <RoundedRect x={0} y={0} width={widthCard} height={heightCard} r={10}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(widthCard, heightCard)}
            colors={[themeColor.main, 'orange']}
          />
        </RoundedRect>
      </Canvas>
      <TouchableGlobal style={styles.cardContent}>{children}</TouchableGlobal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: widthCard,
    height: heightCard,
    borderRadius: 10,
  },
  cardContent: {
    width: widthCard,
    height: heightCard,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BackgroundCard;
