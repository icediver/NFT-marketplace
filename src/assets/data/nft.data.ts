import { INFT } from '@/types/nft.interface';

export const nfts: INFT[] = [
	{
		name: 'Distant Galaxy',
		image: '/images/nfts/nft-01.png',
		price: 1.03,
		id: 1,
		highestBid: 0.33,
		artist: {
			name: 'MoonDancer',
			avatarPath: '/images/avatars/avatar-01.png',
			slug: 'moon-dancer',
			created: [],
			owned: [],
			collection: [],
		},
		slug: 'distant-galaxy',
	},
	{
		name: 'Life On Edena',
		image: '/images/nfts/nft-02.png',
		price: 1.03,
		id: 2,
		highestBid: 0.33,
		artist: {
			name: 'NebulaKid',
			avatarPath: '/images/avatars/avatar-03.png',
			slug: 'nebula-kid',
			created: [],
			owned: [],
			collection: [],
		},
		slug: 'life-on-edena',
	},

	{
		name: 'AstroFiction',
		image: '/images/nfts/nft-03.png',
		price: 1.03,
		id: 3,
		highestBid: 0.33,
		artist: {
			name: 'SpaceOne',
			avatarPath: '/images/avatars/avatar-05.png',
			slug: 'space-one',
			created: [],
			owned: [],
			collection: [],
		},
		slug: 'astrofiction',
	},
];
