export interface IArtist {
  name: string;
  avatarPath: string;
  totalSales?: number;
  notificationCount?: number;
}

export interface ITrendingCollectionItem {
  title: string;
  images: string[];
  artist: IArtist;
}
