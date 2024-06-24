import { ITrendingCollectionItem } from '@/types/artist.interface';

export const trendingCollections: ITrendingCollectionItem[] = [
	{
		title: 'Happy Robots',
		images: [
			'/images/collections/collections-01.png',
			'/images/collections/happy-robots-02.jpg',
			'/images/collections/happy-robots-03.png',
		],
		artist: {
			name: '@Robotica',
			avatarPath: '/images/avatars/avatar-04.png',
			slug: 'robotica',
			created: [],
			owned: [],
			collection: [],
		},
	},
	{
		title: 'DSGN Animals',
		images: [
			'/images/collections/collections-02.png',
			'/images/collections/dsgn-animals-02.png',
			'/images/collections/dsgn-animals-03.jpg',
			'/images/collections/dsgn-animals-04.png',
			'/images/collections/dsgn-animals-05.webp',
			'/images/collections/dsgn-animals-06.jpeg',
			'/images/collections/dsgn-animals-07.jpg',
		],
		artist: {
			name: 'MrFox',
			avatarPath: '/images/avatars/avatar-11.png',
			created: [],
			owned: [],
			collection: [],
			slug: 'mrfox',
		},
	},
	{
		title: 'Magic Mushrooms',
		images: [
			'/images/collections/collections-03.png',
			'/images/collections/magic-mushrooms-02.jpg',
			'/images/collections/magic-mushrooms-03.jpg',
			'/images/collections/magic-mushrooms-04.jpg',
			'/images/collections/magic-mushrooms-05.jpg',
			'/images/collections/magic-mushrooms-06.jpg',
		],
		artist: {
			name: 'Shroomie',
			avatarPath: '/images/avatars/avatar-02.png',
			created: [],
			owned: [],
			collection: [],
			slug: 'shroomie',
		},
	},
	{
		title: 'Disco Machines',
		images: [
			'/images/collections/collections-04.png',
			'/images/collections/disco-machines-02.webp',
			'/images/collections/disco-machines-03.webp',
			'/images/collections/disco-machines-04.webp',
			'/images/collections/disco-machines-05.webp',
		],
		artist: {
			name: 'BeKind2Robots',
			avatarPath: '/images/avatars/avatar-14.png',
			created: [],
			owned: [],
			collection: [],
			slug: 'bekind2robots',
		},
	},
];
