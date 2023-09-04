import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IFocusBottomTab} from './type';
import {EBottomTabName} from '@app/src/navigation/type';

const initState: IFocusBottomTab = {
  name: EBottomTabName.HomeScreen,
};

const focusBottomTabSlice = createSlice({
  name: 'focus_bottom_tab',
  initialState: initState,
  reducers: {
    setFocusBottomTab: (state, action: PayloadAction<IFocusBottomTab>) => {
      return {...state, name: action.payload.name};
    },
  },
});

export const {setFocusBottomTab} = focusBottomTabSlice.actions;
export default focusBottomTabSlice;
