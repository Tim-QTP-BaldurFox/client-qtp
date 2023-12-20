import { createSlice } from '@reduxjs/toolkit'

function set(key) {
  return (state, action) => {
    state[key] = action.payload
  }
}

const initialState = {
  roomCode: null,
  username: '',
  players: [],
  quizSet: null
}

export const reduxSlice = createSlice({
  name: 'redux',
  initialState,
  reducers: {
    setRoomCode: set('roomCode'),
    setUsername: set('username'),
    setQuizSet: set('quizSet'),
    setPlayers: set('players'),
    // addPlayer: (state, action) => {
    //   state.players.push(action.payload)
    // }
  },
})

// Action creators are generated for each case reducer function
export const { setRoomCode, setUsername, setQuizSet, setPlayers,  } = reduxSlice.actions

export default reduxSlice.reducer