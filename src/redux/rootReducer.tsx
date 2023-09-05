import {combineReducers} from 'redux';
import focusBottomTabSlice from './FocusBottomTab/slice';
import authTabSlice from './Auth/slice';

const rootReducer = combineReducers({
  focus_bottom_tab: focusBottomTabSlice.reducer,
  auth: authTabSlice.reducer,
});

export default rootReducer;
