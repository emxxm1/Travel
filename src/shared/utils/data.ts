import {hunza, kalam, kashmir, skardu, swat} from '../../assets/images';

const filterData: any[] = [
  {
    id: 1,
    title: 'Most Viewed',
    selection: true,
  },
  {
    id: 2,
    title: 'Nearby',
    selection: false,
  },
  {
    id: 3,
    title: 'Latest',
    selection: false,
  },
  {
    id: 4,
    title: 'Northen Only',
    selection: false,
  },
];

const tourData: any[] = [
  {
    id: 1,
    title: 'Kashmir',
    selection: false,
    location: 'Azad Kashmir',
    rating: '5.0',
    image: kashmir,
  },
  {
    id: 2,
    title: 'Hunza',
    selection: false,
    location: 'Hunza Kpk',
    rating: '4.0',
    image: hunza,
  },
  {
    id: 3,
    title: 'Skardu',
    selection: true,
    location: 'Sakrdu GB',
    rating: '5.0',
    image: skardu,
  },
  {
    id: 4,
    title: 'Swat',
    selection: false,
    location: 'Swat Kpk',
    rating: '4.5',
    image: swat,
  },
  {
    id: 5,
    title: 'Kalam',
    selection: false,
    location: 'Kalam Kpk',
    rating: '4.5',
    image: kalam,
  },
];

export {filterData, tourData};
