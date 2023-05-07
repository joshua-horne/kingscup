import React from 'react';
import {Box, Heading, Button} from 'native-base';

const GameOverScreen = ({navigation}) => {
  const handlePlayAgain = () => {
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
        Game Over!
      </Heading>
      <Button
        colorScheme="white"
        bg="gray.500"
        onPress={handlePlayAgain}
        _pressed={{bg: 'gray.700'}}>
        Play Again
      </Button>
    </Box>
  );
};

export default GameOverScreen;
