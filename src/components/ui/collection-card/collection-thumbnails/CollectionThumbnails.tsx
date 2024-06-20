import { ITrendingCollectionItem } from "@/types/artist.interface";
import { CollectionThumbnailItem } from "../collection-thumbnail/CollectionThumbnailItem";
import { Space_Mono } from "next/font/google";
import clsx from "clsx";

interface ICollectionThumbnails {
  collection: ITrendingCollectionItem;
}
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export function CollectionThumbnails({ collection }: ICollectionThumbnails) {
  console.log(collection);

  return (
    <div className="grid grid-cols-3 gap-4 py-[15px]">
      {collection.images.map((collection, index) => {
        if (index < 1 || index > 2) return null;
        return <CollectionThumbnailItem key={collection} image={collection} />;
      })}
      <div
        className={clsx(
          "w-[95px] 2xl:w-[100px] h-[95px] 2xl:h-[100px] bg-primary rounded-[20px] flex items-center justify-center text-white 2xl:text-1.25xl hover:contrast-50",
          spaceMono.className,
        )}
      >
        {collection.images.length - 2}+
      </div>
    </div>
  );
}
