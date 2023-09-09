import {useAppSelector} from '../hook';

export const useUser = () => {
  const user = useAppSelector(state => state.user);
  return user;
};
