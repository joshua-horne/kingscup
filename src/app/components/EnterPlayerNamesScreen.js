import React, {useState} from 'react';
import {Box, Text, Button, CloseIcon, Input} from 'native-base';

import {useDispatch, useSelector} from 'react-redux';
import {addPlayerName, removePlayerName} from '../store';

const EnterPlayerNamesScreen = ({navigation}) => {
  const [newPlayerName, setNewPlayerName] = useState('');
  const dispatch = useDispatch();
  const playerNames = useSelector(state => state.playerNames);

  const handleSubmit = () => {
    navigation.navigate('Game');
  };

  const handleAddPlayerName = () => {
    dispatch(addPlayerName(newPlayerName));
    setNewPlayerName('');
  };

  const handleRemovePlayerName = name => {
    dispatch(removePlayerName(name));
  };

  const renderPlayerNames = () => {
    return playerNames.map(name => {
      return (
        <Box
          key={name}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p={2}
          my={2}
          borderRadius={4}
          bg="coolGray.700">
          <Text color="coolGray.50" fontSize={16}>
            {name}
          </Text>
          <CloseIcon
            size={4}
            color="coolGray.50"
            onPress={() => handleRemovePlayerName(name)}
          />
        </Box>
      );
    });
  };

  return (
    <Box bg="red.800" p={4} height="100%">
      <Text color="coolGray.50" fontSize="3xl" mb={4}>
        Enter Player Names:
      </Text>
      <Input
        w="100%"
        variant="underlined"
        placeholder="Name"
        value={newPlayerName}
        onChangeText={text => setNewPlayerName(text)}
        _focus={{borderColor: 'gray.700', borderWidth: 2}}
        bg="white"
        mb={4}
        caretHidden={true}
      />
      <Button
        colorScheme="white"
        bg="gray.500"
        onPress={handleAddPlayerName}
        _pressed={{bg: 'gray.700'}}
        mb={4}>
        Add Player
      </Button>
      {renderPlayerNames()}
      <Button
        colorScheme="white"
        bg="gray.500"
        onPress={handleSubmit}
        _pressed={{bg: 'gray.700'}}>
        Start Game
      </Button>
    </Box>
  );
};

export default EnterPlayerNamesScreen;
