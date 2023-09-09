import {combineReducers} from 'redux';
import focusBottomTabSlice from './FocusBottomTab/slice';
import authTabSlice from './Auth/slice';
import userSlice from './User/slice';

const rootReducer = combineReducers({
  focus_bottom_tab: focusBottomTabSlice.reducer,
  auth: authTabSlice.reducer,
  user: userSlice.reducer,
});

export default rootReducer;
