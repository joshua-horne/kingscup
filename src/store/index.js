import {configureStore, createSlice} from '@reduxjs/toolkit';

const playerNamesSlice = createSlice({
  name: 'playerNames',
  initialState: [],
  reducers: {
    addPlayerName: (state, action) => {
      state.push(action.payload);
    },
    removePlayerName: (state, action) => {
      return state.filter(player => player !== action.payload);
    },
  },
});

export const {addPlayerName, removePlayerName} = playerNamesSlice.actions;

export default configureStore({
  reducer: {
    playerNames: playerNamesSlice.reducer,
  },
});
