import React, {useState} from 'react';
import {
  Box,
  Text,
  Button,
  CloseIcon,
  Input,
  KeyboardAvoidingView,
} from 'native-base';
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
    return (
      <Box flexDirection="row" flexWrap="wrap" mt={2}>
        {playerNames.map(name => (
          <Box
            key={name}
            bg="coolGray.700"
            borderRadius={4}
            p={2}
            mr={2}
            mb={2}
            flexDirection="row"
            alignItems="center">
            <Text color="coolGray.50" fontSize={16} mr={2}>
              {name}
            </Text>
            <CloseIcon
              size={4}
              color="coolGray.50"
              onPress={() => handleRemovePlayerName(name)}
            />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Box
        bg="red.800"
        p={4}
        height="100%"
        position="relative"
        px={16}
        pt={16}
        pb={8}>
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
          mb={4}
          alignSelf="flex-start">
          Add Player
        </Button>
        <Box flex={1} justifyContent="flex-end" pb={4}>
          {renderPlayerNames()}
          <Button
            colorScheme="white"
            bg="gray.500"
            onPress={handleSubmit}
            _pressed={{bg: 'gray.700'}}
            alignSelf="center"
            px={6}
            mt={4}>
            Start Game
          </Button>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default EnterPlayerNamesScreen;
