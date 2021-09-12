import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  value: number;
}

const initialState: ProfileState = {
  value: 0,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    test: (state, action: PayloadAction<number>) => {
      console.log('state', state, action.payload);
      state.value++;
    },
  },
});

export const { test } = profileSlice.actions;

export default profileSlice.reducer;
