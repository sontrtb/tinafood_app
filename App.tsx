import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigation from './src/navigation';

import {store} from '@app/src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from '@app/src/redux/store';

import {QueryClient, QueryClientProvider} from 'react-query';

import {RootSiblingParent} from 'react-native-root-siblings';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{flex: 1}}>
            <RootSiblingParent>
              <AppNavigation />
            </RootSiblingParent>
          </GestureHandlerRootView>
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
