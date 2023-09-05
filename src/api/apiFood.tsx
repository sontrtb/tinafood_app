import {fetcher} from './fetcher';

export interface IFood {
  id?: number;
  displayName?: string;
  state?: number;
  price?: number;
}

const path = {
  getListFood: '/food',
};

function getListFood(): Promise<IFood[]> {
  return fetcher({url: path.getListFood, method: 'get'});
}

export {getListFood};
