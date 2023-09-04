import {combineReducers} from 'redux';
import focusBottomTabSlice from './FocusBottomTab/slice';

const rootReducer = combineReducers({
  focus_bottom_tab: focusBottomTabSlice.reducer,
});

export default rootReducer;
