import { categories } from "@/assets/temporary-data/category.data";
import { creators } from "@/assets/temporary-data/creators.data";
import { nfts } from "@/assets/temporary-data/nft.data";
import { BrowseCategories } from "@/components/screens/browse-categories/BrowseCategories";
import { DiscoverNFTs } from "@/components/screens/discover-nfts/DiscoverNFTs";
import { HeroSection } from "@/components/screens/hero-section/HeroSection";
import { TopRatedArtists } from "@/components/screens/top-rated-artists/TopRatedArtists";
import { TrendingCollection } from "@/components/screens/trending-collection/TrendingCollection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists creators={creators} />
      <BrowseCategories categories={categories} />
      <DiscoverNFTs nfts={nfts} />
    </main>
  );
}
