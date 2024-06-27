import { artistNfts } from '@/assets/data/artist-page.data';
import { Marketplace } from '@/components/screens/marketplace/Marketplace';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Marketplace',
	description: '',
};

export default function Page() {
	return <Marketplace nfts={artistNfts} />;
}
