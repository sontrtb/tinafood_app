import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IMeRes} from '@app/src/api/apiUser';

const initState: IMeRes = {
  id: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    setUser: (state, action: PayloadAction<IMeRes>) => {
      return {...state, ...action.payload};
    },
  },
});

export const {setUser} = userSlice.actions;
export default userSlice;
