import React from 'react';

import {Canvas, Circle, Paint, vec} from '@shopify/react-native-skia';

const width = 256;
const height = 256;

function HomeScreen() {
  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = (width - strokeWidth) / 2;
  return (
    <Canvas style={{flex: 1}}>
      <Circle c={c} r={r} color="red">
        <Paint color="lightblue" />
        <Paint color="#adbce6" style="stroke" strokeWidth={strokeWidth} />
        <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} />
      </Circle>
    </Canvas>
  );
}

export default HomeScreen;
