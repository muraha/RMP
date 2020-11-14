import { localFilter } from './interfaces'

export const MOVIE_API_URL = 'http://localhost:4000'

export const Genres = [
  'Adventure',
  'Action',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Horror',
  'Romance',
  'Science Fiction'
]

export enum Filter {
  all = 'All',
  com = 'Comedy',
  cri = 'Crime',
  adv = 'Adventure',
  hor = 'Horror',
}

export enum Sort {
  rel = 'release',
  rat = 'rating',
}

export const filterState: localFilter[] = [
  {
    name: Filter.all,
    selected: 'btnSelected'
  },
  {
    name: Filter.adv
  },
  {
    name: Filter.com
  },
  {
    name: Filter.hor
  },
  {
    name: Filter.cri
  }]
