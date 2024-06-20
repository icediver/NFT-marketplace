import { trendingCollections } from "@/assets/temporary-data/trending-collection.data";
import { CollectionCard } from "@/components/ui/collection-card/CollectionCard";
import { shuffleArray } from "@/utils/array.utils";

export function TrendingCollection() {
  const shuffledCollections = shuffleArray(trendingCollections);
  return (
    <section className="w-[375px] lg:w-[834px] lg:py-20 2xl:w-[1440px] mx-auto py-[40px] leading-snug">
      <div className=" mx-auto w-[315px] lg:w-[690px] 2xl:w-[1050px]">
        <header className="mb-10 2xl:mb-[60px]">
          <p className="2xl:text-2.25xl text-1.75xl 2xl:leading-tight font-semibold">
            Trending Collection
          </p>
          <p className="2xl:text-1.25xl">
            Checkout Our Weekly Updeated Trending Collection
          </p>
        </header>

        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-[30px]">
          {shuffledCollections.map((collection) => (
            <CollectionCard key={collection.title} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
