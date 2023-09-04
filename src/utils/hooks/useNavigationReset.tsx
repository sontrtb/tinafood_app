import {CommonActions, useNavigation} from '@react-navigation/native';
import {setFocusBottomTab} from '@app/src/redux/FocusBottomTab/slice';
import {useDispatch} from 'react-redux';
import {EBottomTabName} from '@app/src/navigation/type';

function useNavigationReset() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigationReset = (router: EBottomTabName) => {
    dispatch(setFocusBottomTab({name: router}));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: router}],
      }),
    );
  };

  return {navigationReset};
}

export default useNavigationReset;
