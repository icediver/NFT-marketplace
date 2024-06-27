import { categories } from '@/assets/data/category.data';
import { creators } from '@/assets/data/creators.data';
import { howItWorks } from '@/assets/data/how-it-works.data';
import { nfts } from '@/assets/data/nft.data';
import { BrowseCategories } from '@/components/screens/home-page/browse-categories/BrowseCategories';
import { DiscoverNFTs } from '@/components/screens/home-page/discover-nfts/DiscoverNFTs';
import { HeroSection } from '@/components/screens/home-page/hero-section/HeroSection';
import { HowItWorks } from '@/components/screens/home-page/how-it-works/HowItWorks';
import { NFTHighlight } from '@/components/screens/home-page/nft-highlight/NFTHighlight';
import { Subscribe } from '@/components/screens/home-page/subscribe/Subscribe';
import { TopRatedArtists } from '@/components/screens/home-page/top-rated-artists/TopRatedArtists';
import { TrendingCollection } from '@/components/screens/home-page/trending-collection/TrendingCollection';

import { trendingCollections } from '@/assets/data/trending-collection.data';

export default function Home() {
	return (
		<main className="">
			<HeroSection />
			<TrendingCollection collection={trendingCollections} />
			<TopRatedArtists creators={creators} />
			<BrowseCategories categories={categories} />
			<DiscoverNFTs nfts={nfts} />
			<NFTHighlight timeExpires={'2024-06-27 00:00:00'} />
			<HowItWorks cards={howItWorks} />
			<Subscribe />
		</main>
	);
}
