import { ITrendingCollectionItem } from '@/types/artist.interface';
import { CollectionThumbnailItem } from '../collection-thumbnail/CollectionThumbnailItem';
import { Space_Mono } from 'next/font/google';
import clsx from 'clsx';

interface ICollectionThumbnails {
	collection: ITrendingCollectionItem;
}
const spaceMono = Space_Mono({
	subsets: ['latin'],
	weight: ['400'],
});

export function CollectionThumbnails({ collection }: ICollectionThumbnails) {
	return (
		<div className="grid grid-cols-3 gap-4 py-[15px]">
			{collection.images.map((collection, index) => {
				if (index < 1 || index > 2) return null;
				return <CollectionThumbnailItem key={collection} image={collection} />;
			})}
			<div
				className={clsx(
					'flex h-[95px] w-[95px] items-center justify-center rounded-[20px] bg-primary text-white hover:contrast-50 2xl:h-[100px] 2xl:w-[100px] 2xl:text-1.25xl',
					spaceMono.className
				)}
			>
				{collection.images.length - 2}+
			</div>
		</div>
	);
}
