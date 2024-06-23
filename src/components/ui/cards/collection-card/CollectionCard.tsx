"use client";
import { ArtistCard } from "../artist-card/ArtistCard";
import Image from "next/image";
import { CollectionThumbnails } from "./collection-thumbnails/CollectionThumbnails";
import { ITrendingCollectionItem } from "@/types/artist.interface";
interface ICollectionCard {
  collection: ITrendingCollectionItem;
}

export function CollectionCard({ collection }: ICollectionCard) {
  return (
    <div className="lg:w-[330px] lg:h-[515px] w-[315px] h-[505px] bg-main-background rounded-[20px] hidden first:block lg:[&:nth-child(2)]:block 2xl:[&:nth-child(3)]:block">
      <div className="lg:w-[330px] lg:h-[330px] w-[315px] h-[315px] rounded-t-[20px] overflow-hidden">
        <Image
          src={collection.images[0]}
          alt="collection"
          width={330}
          height={330}
        />
      </div>
      <CollectionThumbnails collection={collection} />
      <div className="text-1.25xl pb-2.5">{collection.title}</div>
      <ArtistCard artist={collection.artist} variant="small" />
    </div>
  );
}
