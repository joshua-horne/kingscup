import React from 'react';
import {View, Text, Button} from 'react-native';

const GameOverScreen = ({navigation}) => {
  const handlePlayAgain = () => {
    navigation.navigate('EnterPlayerNames');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Game Over!</Text>
      <Button title="Play Again" onPress={handlePlayAgain} />
    </View>
  );
};

export default GameOverScreen;
