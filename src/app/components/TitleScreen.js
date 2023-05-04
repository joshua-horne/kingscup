import React from 'react';
import {Box, Heading, Button, Image} from 'native-base';

const TitleScreen = ({navigation}) => {
  const startGame = () => {
    navigation.navigate('EnterPlayerNames');
  };

  return (
    <Box
      bg="red.800"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center">
      <Heading size="3xl" color="coolGray.50" textAlign="center" mb={8}>
        Kings Cup
      </Heading>
      <Image
        source={require('../../lib/cup.png')}
        alt="Cup"
        size="2xl"
        mb={8}
      />
      <Button
        colorScheme="white"
        bg="gray.500"
        onPress={startGame}
        _pressed={{bg: 'gray.700'}}>
        Start Game
      </Button>
    </Box>
  );
};

export default TitleScreen;
