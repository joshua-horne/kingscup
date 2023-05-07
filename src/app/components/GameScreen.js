import React, {useState} from 'react';
import {Box, Text, Button, Image, Modal, Flex} from 'native-base';
import {useSelector} from 'react-redux';
import {shuffle} from 'lodash';

import deckOfCards from '../data/deckData';

const GameScreen = ({navigation}) => {
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [deck] = useState(shuffle(deckOfCards));
  const [gameState, setGameState] = useState({
    currentCardIndex: 0,
    currentCard: deck[0],
    kingsDrawn: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const playerNames = useSelector(state => state.playerNames);

  const drawCard = () => {
    setGameState(prevState => {
      const nextCardIndex = prevState.currentCardIndex + 1;
      const nextCard = deck[nextCardIndex];

      if (nextCard.value === 'KING') {
        const kingsDrawn = prevState.kingsDrawn + 1;
        if (kingsDrawn === 4) {
          navigation.navigate('GameOver');
        }
        return {
          ...prevState,
          currentCardIndex: nextCardIndex,
          currentCard: nextCard,
          kingsDrawn: kingsDrawn,
        };
      } else {
        return {
          ...prevState,
          currentCardIndex: nextCardIndex,
          currentCard: nextCard,
        };
      }
    });
  };

  const handleNextPlayer = () => {
    setActivePlayerIndex((activePlayerIndex + 1) % playerNames.length);
    drawCard();
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      bg="red.800"
      p={4}
      height="100%"
      position="relative"
      px={16}
      pt={16}
      pb={8}>
      <Text color="coolGray.50" fontSize="3xl" mb={4}>
        Current Player: {playerNames[activePlayerIndex]}
      </Text>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Box w={150} h={250} flex={1} justifyContent="center">
          <Image
            flex={1}
            alt="Card"
            key={gameState.currentCardIndex}
            source={gameState.currentCard.image}
            resizeMode="contain"
          />
        </Box>
      </Flex>
      <Text color="coolGray.50" fontSize="xl" mb={2} mt={4}>
        Card:{' '}
        {`${gameState.currentCard.value} of ${gameState.currentCard.suit}`}
      </Text>
      <Box>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text color="coolGray.50" fontSize="md">
            Effect: {gameState.currentCard.effectTitle}
          </Text>
          <Button
            size="lg"
            onPress={handleModalOpen}
            bg="gray.500"
            borderRadius={100}
            fontWeight="bold"
            fontSize="2xl">
            ⓘ
          </Button>
        </Flex>
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <Modal.Content>
            <Modal.Header>{gameState.currentCard.effectTitle}</Modal.Header>
            <Modal.Body>
              <Text>{gameState.currentCard.effectDescription}</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group>
                <Button onPress={handleModalClose}>Close</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Box>

      <Text color="coolGray.50" fontSize="md" mb={4}>
        Kings drawn: {gameState.kingsDrawn}
      </Text>
      <Text color="coolGray.50" fontSize="md" mb={4}>
        Next player: {playerNames[(activePlayerIndex + 1) % playerNames.length]}
      </Text>
      <Button onPress={handleNextPlayer}>Next Player</Button>
    </Box>
  );
};

export default GameScreen;
