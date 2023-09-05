import {fetcher} from './fetcher';

export interface IMeRes {
  id: number;
  budget?: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  room?: string;
  role?: string;
}

const path = {
  getMe: '/users/me',
};

function getMe(): Promise<IMeRes> {
  return fetcher({url: path.getMe, method: 'get'});
}

export {getMe};
