import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigation from './src/navigation';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppNavigation />
    </GestureHandlerRootView>
  );
}

export default App;
