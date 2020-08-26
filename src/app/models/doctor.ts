import { Hospital } from './hospital';

export interface Doctor {
  _id: string,
  fullname: string,
  email: string,
  specialty: string[],
  examinations: string,
  workPlace: Hospital,
  education: string[],
  reviews: { _id: string, rating: string, count: string },
  bio: string
}
