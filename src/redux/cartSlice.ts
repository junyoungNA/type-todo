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
      state[target].count += 1;
    },
    addItem(state, action) {
      const target = state.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (target === -1) {
        state.push(action.payload);
      } else {
        state[target].count += Number(action.payload.count);
      }
    },
    removeItem(state, action) {
      const target = state.findIndex((item: any) => item.id === action.payload);
      console.log(target);
      if (target === -1) return;
      state.splice(target, 1);
    },
  },
});

export const { changeCount, addItem, removeItem } = userData.actions;

export default userData;
