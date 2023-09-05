import {useAppSelector} from '../hook';

export const useIsLogin = () => {
  const isLogin = !!useAppSelector(state => state.auth)?.token;
  return isLogin;
};
