const deckOfCards = [
  {
    id: 'AH',
    value: 11,
    suit: 'hearts',
    name: 'Ace of Hearts',
    image: 'assets/images/cards/AH.png',
  },
  {
    id: '2H',
    value: 2,
    suit: 'hearts',
    name: 'Two of Hearts',
    image: 'assets/images/cards/2H.png',
  },
  {
    id: '3H',
    value: 3,
    suit: 'hearts',
    name: 'Three of Hearts',
    image: 'assets/images/cards/3H.png',
  },
  {
    id: '4H',
    value: 4,
    suit: 'hearts',
    name: 'Four of Hearts',
    image: 'assets/images/cards/4H.png',
  },
  {
    id: '5H',
    value: 5,
    suit: 'hearts',
    name: 'Five of Hearts',
    image: 'assets/images/cards/5H.png',
  },
  {
    id: '6H',
    value: 6,
    suit: 'hearts',
    name: 'Six of Hearts',
    image: 'assets/images/cards/6H.png',
  },
  {
    id: '7H',
    value: 7,
    suit: 'hearts',
    name: 'Seven of Hearts',
    image: 'assets/images/cards/7H.png',
  },
  {
    id: '8H',
    value: 8,
    suit: 'hearts',
    name: 'Eight of Hearts',
    image: 'assets/images/cards/8H.png',
  },
  {
    id: '9H',
    value: 9,
    suit: 'hearts',
    name: 'Nine of Hearts',
    image: 'assets/images/cards/9H.png',
  },
  {
    id: '10H',
    value: 10,
    suit: 'hearts',
    name: 'Ten of Hearts',
    image: 'assets/images/cards/10H.png',
  },
  {
    id: 'JH',
    value: 10,
    suit: 'hearts',
    name: 'Jack of Hearts',
    image: 'assets/images/cards/JH.png',
  },
  {
    id: 'QH',
    value: 10,
    suit: 'hearts',
    name: 'Queen of Hearts',
    image: 'assets/images/cards/QH.png',
  },
  {
    id: 'KH',
    value: 10,
    suit: 'hearts',
    name: 'King of Hearts',
    image: 'assets/images/cards/KH.png',
  },
  {
    id: 'AD',
    value: 11,
    suit: 'diamonds',
    name: 'Ace of Diamonds',
    image: 'assets/images/cards/AD.png',
  },
  {
    id: '2D',
    value: 2,
    suit: 'diamonds',
    name: 'Two of Diamonds',
    image: 'assets/images/cards/2D.png',
  },
  {
    id: '3D',
    value: 3,
    suit: 'diamonds',
    name: 'Three of Diamonds',
    image: 'assets/images/cards/3D.png',
  },
  {
    id: '4D',
    value: 4,
    suit: 'diamonds',
    name: 'Four of Diamonds',
    image: 'assets/images/cards/4D.png',
  },
  {
    id: '5D',
    value: 5,
    suit: 'diamonds',
    name: 'Five of Diamonds',
    image: 'assets/images/cards/5D.png',
  },
  {
    id: '6D',
    value: 6,
    suit: 'diamonds',
    name: 'Six of Diamonds',
    image: 'assets/images/cards/6D.png',
  },
  {
    id: '7D',
    value: 7,
    suit: 'diamonds',
    name: 'Seven of Diamonds',
    image: 'assets/images/cards/7D.png',
  },
  {
    id: '8D',
    value: 8,
    suit: 'diamonds',
    name: 'Eight of Diamonds',
    image: 'assets/images/cards/8D.png',
  },
  {
    id: '9D',
    value: 9,
    suit: 'diamonds',
    name: 'Nine of Diamonds',
    image: 'assets/images/cards/9D.png',
  },
  {
    id: '10D',
    value: 10,
    suit: 'diamonds',
    name: 'Ten of Diamonds',
    image: 'assets/images/cards/10D.png',
  },
  {
    id: 'JD',
    value: 10,
    suit: 'diamonds',
    name: 'Jack of Diamonds',
    image: 'assets/images/cards/JD.png',
  },
  {
    id: 'QD',
    value: 10,
    suit: 'diamonds',
    name: 'Queen of Diamonds',
    image: 'assets/images/cards/QD.png',
  },
  {
    id: 'KD',
    value: 10,
    suit: 'diamonds',
    name: 'King of Diamonds',
    image: 'assets/images/cards/KD.png',
  },
  {
    id: 'AC',
    value: 11,
    suit: 'clubs',
    name: 'Ace of Clubs',
    image: 'assets/images/cards/AC.png',
  },
  {
    id: '2C',
    value: 2,
    suit: 'clubs',
    name: 'Two of Clubs',
    image: 'assets/images/cards/2C.png',
  },
  {
    id: '3C',
    value: 3,
    suit: 'clubs',
    name: 'Three of Clubs',
    image: 'assets/images/cards/3C.png',
  },
  {
    id: '4C',
    value: 4,
    suit: 'clubs',
    name: 'Four of Clubs',
    image: 'assets/images/cards/4C.png',
  },
  {
    id: '5C',
    value: 5,
    suit: 'clubs',
    name: 'Five of Clubs',
    image: 'assets/images/cards/5C.png',
  },
  {
    id: '6C',
    value: 6,
    suit: 'clubs',
    name: 'Six of Clubs',
    image: 'assets/images/cards/6C.png',
  },
  {
    id: '7C',
    value: 7,
    suit: 'clubs',
    name: 'Seven of Clubs',
    image: 'assets/images/cards/7C.png',
  },
  {
    id: '8C',
    value: 8,
    suit: 'clubs',
    name: 'Eight of Clubs',
    image: 'assets/images/cards/8C.png',
  },
  {
    id: '9C',
    value: 9,
    suit: 'clubs',
    name: 'Nine of Clubs',
    image: 'assets/images/cards/9C.png',
  },
  {
    id: '10C',
    value: 10,
    suit: 'clubs',
    name: 'Ten of Clubs',
    image: 'assets/images/cards/10C.png',
  },
  {
    id: 'JC',
    value: 10,
    suit: 'clubs',
    name: 'Jack of Clubs',
    image: 'assets/images/cards/JC.png',
  },
  {
    id: 'QC',
    value: 10,
    suit: 'clubs',
    name: 'Queen of Clubs',
    image: 'assets/images/cards/QC.png',
  },
  {
    id: 'KC',
    value: 10,
    suit: 'clubs',
    name: 'King of Clubs',
    image: 'assets/images/cards/KC.png',
  },
  {
    id: 'AS',
    value: 11,
    suit: 'spades',
    name: 'Ace of Spades',
    image: 'assets/images/cards/AS.png',
  },
  {
    id: '2S',
    value: 2,
    suit: 'spades',
    name: 'Two of Spades',
    image: 'assets/images/cards/2S.png',
  },
  {
    id: '3S',
    value: 3,
    suit: 'spades',
    name: 'Three of Spades',
    image: 'assets/images/cards/3S.png',
  },
  {
    id: '4S',
    value: 4,
    suit: 'spades',
    name: 'Four of Spades',
    image: 'assets/images/cards/4S.png',
  },
  {
    id: '5S',
    value: 5,
    suit: 'spades',
    name: 'Five of Spades',
    image: 'assets/images/cards/5S.png',
  },
  {
    id: '6S',
    value: 6,
    suit: 'spades',
    name: 'Six of Spades',
    image: 'assets/images/cards/6S.png',
  },
  {
    id: '7S',
    value: 7,
    suit: 'spades',
    name: 'Seven of Spades',
    image: 'assets/images/cards/7S.png',
  },
  {
    id: '8S',
    value: 8,
    suit: 'spades',
    name: 'Eight of Spades',
    image: 'assets/images/cards/8S.png',
  },
  {
    id: '9S',
    value: 9,
    suit: 'spades',
    name: 'Nine of Spades',
    image: 'assets/images/cards/9S.png',
  },
  {
    id: '10S',
    value: 10,
    suit: 'spades',
    name: 'Ten of Spades',
    image: 'assets/images/cards/10S.png',
  },
  {
    id: 'JS',
    value: 10,
    suit: 'spades',
    name: 'Jack of Spades',
    image: 'assets/images/cards/JS.png',
  },
  {
    id: 'QS',
    value: 10,
    suit: 'spades',
    name: 'Queen of Spades',
    image: 'assets/images/cards/QS.png',
  },
  {
    id: 'KS',
    value: 10,
    suit: 'spades',
    name: 'King of Spades',
    image: 'assets/images/cards/KS.png',
  },
];

export default deckOfCards;
