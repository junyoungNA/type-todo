import { configureStore, createSlice } from '@reduxjs/toolkit';
import userData from './cartSlice';
const user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {},
});

const stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
  reducers: {},
});

const store = configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    userData: userData.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
