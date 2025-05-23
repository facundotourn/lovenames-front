// PLAYER
const Player = {
  nickname: 'string',
  role: 'spy | player',
}

// CARD
const Card = {
  word: '',
  state: 'revealed | default',
  type: 'red | blue | none | death'
}

// ROOM
const Room = {
  id: '',
  state: 'waiting_players | in_progress | finished',
  teams: {
    red: [Player],
    blue: [Player]
  },
  cards: [Card]
}