import {useAppSelector} from '../hook';

export const useFocusBottomTab = () => {
  const focusBottomTab = useAppSelector(state => state.focus_bottom_tab).name;
  return focusBottomTab;
};
