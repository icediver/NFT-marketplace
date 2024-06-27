'use client';
import ArtistCard from '../artist-card/ArtistCard';
import Image from 'next/image';
import { CollectionThumbnails } from './collection-thumbnails/CollectionThumbnails';
import { ITrendingCollectionItem } from '@/types/artist.interface';
interface ICollectionCard {
	collection: ITrendingCollectionItem;
}

export function CollectionCard({ collection }: ICollectionCard) {
	return (
		<div className="hidden h-[505px] w-[315px] rounded-[20px] bg-main-background first:block lg:h-[515px] lg:w-[330px] lg:[&:nth-child(2)]:block 2xl:[&:nth-child(3)]:block">
			<div className="h-[315px] w-[315px] overflow-hidden rounded-t-[20px] lg:h-[330px] lg:w-[330px]">
				<Image
					src={collection.images[0]}
					alt="collection"
					width={330}
					height={330}
				/>
			</div>
			<CollectionThumbnails collection={collection} />
			<div className="pb-2.5 text-1.25xl">{collection.title}</div>
			<ArtistCard artist={collection.artist} variant="small" />
		</div>
	);
}
