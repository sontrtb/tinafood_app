import {fetcher} from './fetcher';

export interface ILoginBody {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken?: string;
  refreshToken?: string;
}

const path = {
  login: '/auth/login',
};

function login(body: ILoginBody): Promise<ILoginResponse> {
  return fetcher({url: path.login, method: 'post', data: body});
}

export {login};
