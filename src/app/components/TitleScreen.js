import React from 'react';
import {View, Text, Button} from 'react-native';

const TitleScreen = ({navigation}) => {
  const startGame = () => {
    navigation.navigate('EnterPlayerNames');
  };

  return (
    <View>
      <Text>Kings Cup</Text>
      <Button title="Start Game" onPress={startGame} />
    </View>
  );
};

export default TitleScreen;
