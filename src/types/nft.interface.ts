import { IArtist } from './artist.interface';

export interface INFT {
	name: string;
	image: string;
	price: number;
	id: number;
	highestBid: number;
	artist: IArtist;
	slug: string;
	minted: string;
	description: string;
	etherscanLink?: string;
	originalLink?: string;
	auctionEnds?: string;
	tags?: string[];
}
