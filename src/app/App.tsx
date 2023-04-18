import 'react-native-gesture-handler';
import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import TitleScreen from './components/TitleScreen';
import EnterPlayerNamesScreen from './components/EnterPlayerNamesScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import ImageCheck from './components/ImageCheck';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Title" component={TitleScreen} />
            <Stack.Screen name="ImageCheck" component={ImageCheck} />
            <Stack.Screen
              name="EnterPlayerNames"
              component={EnterPlayerNamesScreen}
            />
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="GameOver" component={GameOverScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
