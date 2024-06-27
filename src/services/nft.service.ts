import { artistNfts } from '@/assets/data/artist-page.data';
import { INFT } from '@/types/nft.interface';
import { ArtistService } from './artist.service';

export const NFTService = {
	async getBySlug(slug: string): Promise<INFT> {
		const nft = artistNfts.find((nft) => nft.slug === slug);
		//Todo: delete this plug
		if (nft) nft.image = '/images/nft-page/the-orbitians.png';
		if (!nft) {
			throw new Error('NFT not found');
		}
		const artist = await ArtistService.getBySlug(nft.artist.slug);
		nft.artist.collection = artistNfts;

		return nft;
	},
};
