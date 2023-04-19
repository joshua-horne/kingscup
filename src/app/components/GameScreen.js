import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {shuffle} from 'lodash';

import deckOfCards from '../data/deckData';

const GameScreen = ({navigation}) => {
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [deck] = useState(shuffle(deckOfCards));
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [kingsDrawn, setKingsDrawn] = useState(0);
  const [currentCard, setCurrentCard] = useState(deck[currentCardIndex]);

  const playerNames = useSelector(state => state.playerNames);

  const drawCard = () => {
    const nextCardIndex = currentCardIndex + 1;
    const nextCard = deck[nextCardIndex];
    setCurrentCardIndex(nextCardIndex);
    setCurrentCard(nextCard);

    if (nextCard.value === 'KING') {
      setKingsDrawn(kingsDrawn + 1);
      if (kingsDrawn === 3) {
        navigation.navigate('GameOver');
      }
    }
  };

  const handleNextPlayer = () => {
    setActivePlayerIndex((activePlayerIndex + 1) % playerNames.length);
    drawCard();
  };

  return (
    <View>
      <Text>Current Player: {playerNames[activePlayerIndex]}</Text>
      <View style={{width: 150, height: 250}}>
        <Image
          source={currentCard.image}
          resizeMode="contain"
          style={{flex: 1, width: undefined, height: undefined}}
        />
      </View>
      <Text>
        Card: {currentCard.value} of {currentCard.suit}
      </Text>
      <Text>Kings drawn: {kingsDrawn}</Text>
      <Text>
        Next player: {playerNames[(activePlayerIndex + 1) % playerNames.length]}
      </Text>
      <Button title="Next Player" onPress={handleNextPlayer} />
    </View>
  );
};

export default GameScreen;
