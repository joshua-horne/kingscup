import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';

const GameScreen = () => {
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [deckId, setDeckId] = useState('');
  const [currentCard, setCurrentCard] = useState({});
  const [remainingCards, setRemainingCards] = useState(0);
  const playerNames = useSelector(state => state.playerNames);

  useEffect(() => {
    const fetchDeck = async () => {
      const response = await axios.get(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
      );
      setDeckId(response.data.deck_id);
      setRemainingCards(response.data.remaining);
    };
    fetchDeck();
  }, []);

  const drawCard = () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => {
        const card = response.data.cards[0];
        setCurrentCard(card);
        setRemainingCards(response.data.remaining);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleNextPlayer = () => {
    setActivePlayerIndex((activePlayerIndex + 1) % playerNames.length);
    drawCard();
  };

  return (
    <View>
      <Text>Current Player: {playerNames[activePlayerIndex]}</Text>
      {currentCard.image && (
        <Image
          source={{uri: currentCard.image}}
          style={{width: 200, height: 300}}
        />
      )}
      <Text>
        Card: {currentCard.value} of {currentCard.suit}
      </Text>
      <Text>Remaining cards in deck: {remainingCards}</Text>
      <Text>
        Next player: {playerNames[(activePlayerIndex + 1) % playerNames.length]}
      </Text>
      <Button title="Next Player" onPress={handleNextPlayer} />
    </View>
  );
};

export default GameScreen;
