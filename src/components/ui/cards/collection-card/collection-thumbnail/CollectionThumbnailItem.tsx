import Image from "next/image";

interface ICollectionThumbnailItem {
  image: string;
}

export function CollectionThumbnailItem({ image }: ICollectionThumbnailItem) {
  return (
    <div className="w-[95px] h-[95px] 2xl:w-[100px] 2xl:h-[100px] rounded-[20px] overflow-hidden">
      <Image src={image} alt="collection" width={315} height={315} />
    </div>
  );
}
