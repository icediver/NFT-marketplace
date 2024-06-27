import { artistNfts } from '@/assets/data/artist-page.data';
import { NFTPage } from '@/components/screens/nft-page/NFTPage';
import { NFTService } from '@/services/nft.service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: '',
	description: '',
};

export async function generateStaticParams() {
	const paths = artistNfts.map((nft) => ({
		slug: nft.slug,
	}));

	return paths;
}

async function getNftBySlug(slug: string) {
	const nft = await NFTService.getBySlug(slug);
	return nft;
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const nft = await getNftBySlug(slug);

	if (!nft) {
		return <div>Nft not found</div>;
	}

	return <NFTPage nft={nft} />;
}

export const dynamicParams = false;
