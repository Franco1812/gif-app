import { Gif } from '../interfaces/gif.interface';
import { TenorItem } from './../interfaces/tenor.interfaces';

export class GifMapper {
  static mapTenorItemToGif(item: TenorItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.media[0].gif.url,
    };
  }

  static mapTenorItemsToGifArray(items: TenorItem[]): Gif[] {
    return items.map(this.mapTenorItemToGif);
  }
}
