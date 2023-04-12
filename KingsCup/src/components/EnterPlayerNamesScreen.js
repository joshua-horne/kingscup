import React, {useState} from 'react';
import {View, Text} from 'native-base';
import {TextInput, Button} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {addPlayerName, removePlayerName} from '../store';

const EnterPlayerNamesScreen = ({navigation}) => {
  const [newPlayerName, setNewPlayerName] = useState('');
  const dispatch = useDispatch();
  const playerNames = useSelector(state => state.playerNames);

  const handleSubmit = () => {
    // Submit the form data and navigate to the next screen
    navigation.navigate('GameScreen');
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
        <View key={name}>
          <Text>{name}</Text>
          <Button title="Remove" onPress={() => handleRemovePlayerName(name)} />
        </View>
      );
    });
  };

  return (
    <View>
      <Text>Enter Player Names:</Text>
      <TextInput
        placeholder="Player 1"
        value={newPlayerName}
        onChangeText={text => setNewPlayerName(text)}
      />
      <Button title="Add Player" onPress={handleAddPlayerName} />
      {renderPlayerNames()}
      <Button title="Start Game" onPress={handleSubmit} />
    </View>
  );
};

export default EnterPlayerNamesScreen;
