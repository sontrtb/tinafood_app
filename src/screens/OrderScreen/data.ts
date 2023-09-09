export interface ITip {
  id: number;
  value: number;
  name: string;
  color: string;
}

const roomList = [
  {
    id: 1,
    value: '4',
    name: 'Tầng 4',
    image:
      'https://haycafe.vn/wp-content/uploads/2022/10/Hinh-anh-gai-xinh-Viet-Nam-cuoi-tuoi-tan.jpg',
  },
  {
    id: 2,
    value: '1405',
    name: 'Tầng 14',
    image:
      'https://haycafe.vn/wp-content/uploads/2022/10/Hinh-anh-gai-xinh-Viet-Nam-cuoi-tuoi-tan.jpg',
  },
];

const tipList: ITip[] = [
  {
    id: 1,
    value: 1,
    name: '1.000',
    color: '#d6d3d1',
  },
  {
    id: 2,
    value: 2,
    name: '2.000',
    color: '#cbd5e1',
  },
  {
    id: 3,
    value: 5,
    name: '5.000',
    color: '#93c5fd',
  },
  {
    id: 4,
    value: 10,
    name: '10.000',
    color: '#facc15',
  },
  {
    id: 5,
    value: 20,
    name: '20.000',
    color: '#67e8f9',
  },
  {
    id: 6,
    value: 50,
    name: '50.000',
    color: '#f9a8d4',
  },
];

export {roomList, tipList};
