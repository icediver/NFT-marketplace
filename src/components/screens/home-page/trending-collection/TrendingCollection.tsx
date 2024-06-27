import { CollectionCard } from '@/components/ui/cards/collection-card/CollectionCard';
import { ITrendingCollectionItem } from '@/types/artist.interface';
import { shuffleArray } from '@/utils/array.utils';

interface ITrendingCollection {
	collection: ITrendingCollectionItem[];
}

export function TrendingCollection({ collection }: ITrendingCollection) {
	const shuffledCollections = shuffleArray(collection);
	return (
		<section className="mx-auto w-[375px] py-[40px] leading-snug lg:w-[834px] lg:py-20 2xl:w-[1440px]">
			<div className="adaptive-container">
				<header className="mb-10 2xl:mb-[60px]">
					<p className="text-1.75xl font-semibold 2xl:text-2.25xl 2xl:leading-tight">
						Trending Collection
					</p>
					<p className="2xl:text-1.25xl">
						Checkout Our Weekly Updeated Trending Collection
					</p>
				</header>

				<div className="grid gap-[30px] lg:grid-cols-2 2xl:grid-cols-3">
					{shuffledCollections.map((collection) => (
						<CollectionCard key={collection.title} collection={collection} />
					))}
				</div>
			</div>
		</section>
	);
}
