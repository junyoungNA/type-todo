import { createSlice } from '@reduxjs/toolkit';

const userData = createSlice({
  name: 'userData',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    changeCount(state: any, action) {
      // state[action.payload].count += 1;
      const target = state.findIndex((item: any) => item.id === action.payload);
      console.log(target);
      state[target].count += 1;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { changeCount, addItem } = userData.actions;

export default userData;
