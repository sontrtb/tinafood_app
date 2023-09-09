import {IFood} from './apiFood';
import {fetcher} from './fetcher';

export interface IBooking {
  id: number;
  isChosen?: boolean | null;
  price?: number;
  tip?: number;
  food?: IFood;
  createdBy?: {
    username?: string;
  };
}

export interface IGetListBookingParms {
  bookDate: string;
  session?: number;
}

export interface ICreateBookingBody {
  session: 'Lunch' | 'Dinner';
  room: string;
  foodId: number;
  price: number;
  tip: number;
}

const path = {
  getListBooking: '/booking',
  createBooking: '/booking',
};

function getListBooking({
  bookDate,
  session,
}: IGetListBookingParms): Promise<IBooking[]> {
  return fetcher({
    url: path.getListBooking,
    method: 'get',
    params: {
      filter: JSON.stringify({bookDate: bookDate, session: session}),
    },
  });
}

function createBooking(body: ICreateBookingBody): Promise<IBooking[]> {
  return fetcher({
    url: path.createBooking,
    method: 'post',
    data: body,
  });
}

export {getListBooking, createBooking};
