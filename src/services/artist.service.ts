import { artistNfts } from '@/assets/data/artist-page.data';
import { creators } from '@/assets/data/creators.data';
import { IArtist } from '@/types/artist.interface';
import { shuffleArray } from '@/utils/array.utils';

export const ArtistService = {
	async getBySlug(slug: string): Promise<IArtist> {
		const artist = creators.find((artist) => artist.slug === slug);
		if (!artist) {
			throw new Error('Artist not found');
		}
		// artistNfts.map((nft) => {
		// 	artist?.created.push(nft);
		// });
		artist.created = artistNfts;
		artist.owned = getShdffledCutedArray(artistNfts);
		artist.collection = getShdffledCutedArray(artistNfts);

		return artist;
	},
};

function getShdffledCutedArray<T>(array: T[]): T[] {
	const random = Math.floor(Math.random() * array.length);
	const newArray = array.slice(0, random + 1);
	const shuffledArray = shuffleArray(newArray);
	return shuffledArray;
}
