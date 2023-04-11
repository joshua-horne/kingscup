import 'react-native-gesture-handler';
import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import TitleScreen from './components/TitleScreen';
import EnterPlayerNamesScreen from './components/EnterPlayerNamesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TitleScreen" component={TitleScreen} />
            <Stack.Screen
              name="EnterPlayerNames"
              component={EnterPlayerNamesScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
