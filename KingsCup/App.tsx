import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, Box} from 'native-base';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box>Hello world</Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
