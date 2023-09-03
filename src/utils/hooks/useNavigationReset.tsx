import {CommonActions, useNavigation} from '@react-navigation/native';

function useNavigationReset() {
  const navigation = useNavigation();

  const navigationReset = (router: string) => {
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
