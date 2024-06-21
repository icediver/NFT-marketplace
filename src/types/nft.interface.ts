import { IArtist } from "./artist.interface";

export interface INFT {
  name: string;
  image: string;
  price: number;
  id: number;
  highestBid: number;
  artist: IArtist;
}
