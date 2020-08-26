import { Doctor } from './doctor';

export interface Hospital {
  _id: string,
  name: string,
  address: string,
  location: { lat: string, lon: string },
  phone: string,
  doctors: Doctor[],
  distance: number,
  overallRating: number
}
