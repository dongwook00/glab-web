import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUsers from '../interfaces/user';

const initialState: IUsers = {
  id: 0,
  nickname: '글램남',
  gender: '남성',
  birthday: '1985-11-10',
  location: '서울 강남구',
  about: null,
  height: 171,
  bodyType: '보통',
  jobName: '',
  jobField: '',
  education: '',
  school: '',
  personality: '',
  religion: '',
  drinking: '',
  bloodType: '',
  images: [{ id: 1, url: '', alt: '' }],
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<{ type: string; value?: string }>) => {
      state[action.payload.type] = action.payload.value;
    },
  },
});

export const { update } = profileSlice.actions;

export default profileSlice.reducer;
