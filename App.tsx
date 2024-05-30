import { NavigationContainer } from '@react-navigation/native';
import React, { createRef } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const navigationRef: any = createRef();
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
