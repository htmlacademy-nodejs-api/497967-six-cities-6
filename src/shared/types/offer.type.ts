import { TCity } from './city.type.js';
import { TLocation } from './location.type.js';

export enum EOfferType {
  Apartment = 'Apartment',
  House = 'House',
  Room = 'Room',
  Hotel = 'Hotel',
}

export enum EFacility {
  Breakfast = 'Breakfast',
  Conditioner = 'Air conditioning',
  Laptop = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge',
}

export type TOffer = {
  id: number;
  publicationDate: Date;
  title: string;
  description: string;
  city: TCity;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: EOfferType;
  countRooms: number;
  countAdults: number;
  price: number;
  facilities: EFacility[] | null;
  authorId: number;
  commentsIds: number[] | null;
  location: TLocation;
};
