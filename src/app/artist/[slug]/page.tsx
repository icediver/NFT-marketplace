import { creators } from '@/assets/data/creators.data';
import { ArtistPage } from '@/components/screens/artist-page/ArtistPage';
import { ArtistService } from '@/services/artist.service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Artist Page',
	description: '',
};

export type TypeParamSlug = {
	slug?: string;
};

export interface IPageSlugParam {
	params: TypeParamSlug;
}

export async function generateStaticParams() {
	const paths = creators.map((artist) => ({
		slug: artist.slug,
	}));

	return paths;
}

async function getArtistBySlug(slug: string) {
	const artist = await ArtistService.getBySlug(slug);
	return artist;
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const artist = await getArtistBySlug(slug);

	if (!artist) {
		return <div>Artist not found</div>;
	}

	return <ArtistPage artist={artist} />;
}

export const dynamicParams = false;
