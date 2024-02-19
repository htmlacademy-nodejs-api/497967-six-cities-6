import { TCity } from '../../types/city.type.js';
import { EFacility, EOfferType, TOffer } from '../../types/offer.type.js';
import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(private readonly fileName: string) {}

  public read(): void {
    this.rawData = readFileSync(this.fileName, { encoding: 'utf-8' });
  }

  public toArray(): TOffer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(
        ([
          id,
          publicationDate,
          title,
          description,
          city,
          previewImage,
          images,
          isPremium,
          isFavorite,
          rating,
          type,
          countRooms,
          countAdults,
          price,
          facilities,
          authorId,
          commentsIds,
          location,
        ]) => ({
          id: Number.parseInt(id, 10),
          publicationDate: new Date(publicationDate),
          title,
          description,
          city: city as TCity,
          previewImage,
          images: images.split(';'),
          isPremium: Boolean(isPremium),
          isFavorite: Boolean(isFavorite),
          rating: Number.parseInt(rating, 10),
          type: type as EOfferType,
          countRooms: Number.parseInt(countRooms, 10),
          countAdults: Number.parseInt(countAdults, 10),
          price: Number.parseInt(price, 10),
          facilities: facilities.split(';') as EFacility[],
          authorId: Number.parseInt(authorId, 10),
          commentsIds: commentsIds !== 'null' ? commentsIds.split(';').map((commentId) => Number.parseInt(commentId, 10)) : null,
          location: {
            latitude: +location.split(';')[0],
            longitude:+location.split(';')[1],
          },
        })
      );
  }
}
