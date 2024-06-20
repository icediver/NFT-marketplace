import { creators } from "@/assets/temporary-data/creators.data";
import { HeroSection } from "@/components/screens/hero-section/HeroSection";
import { TopRatedArtists } from "@/components/screens/top-rated-artists/TopRatedArtists";
import { TrendingCollection } from "@/components/screens/trending-collection/TrendingCollection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists creators={creators} />
    </main>
  );
}
