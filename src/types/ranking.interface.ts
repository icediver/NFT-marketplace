export interface IRankingItem {
	id: number;
	name: string;
	avatarPath: string;
	change: number;
	nftsSold: number;
	volume: number;
}

export interface IRankingsResponse {
	today: IRankingItem[];
	'this week': IRankingItem[];
	'this month': IRankingItem[];
	'all time': IRankingItem[];
}
