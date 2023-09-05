import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IAuth} from './type';

const initState: IAuth = {
  token: undefined,
};

const authTabSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setToken: (state, action: PayloadAction<IAuth>) => {
      return {...state, token: action.payload.token};
    },
    clearToken: state => {
      return {...state, token: undefined};
    },
  },
});

export const {setToken, clearToken} = authTabSlice.actions;
export default authTabSlice;
