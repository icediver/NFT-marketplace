import { INFT } from './nft.interface';

export interface IArtist {
	name: string;
	avatarPath: string;
	totalSales?: number;
	notificationCount?: number;
	slug: string;
	wallpaper?: string;
	created: INFT[];
	owned: INFT[];
	collection: INFT[];
}

export interface ITrendingCollectionItem {
	title: string;
	images: string[];
	artist: IArtist;
}
