import { INFT } from "@/types/nft.interface";
import Image from "next/image";
import { ArtistCard } from "../artist-card/ArtistCard";
import { Space_Mono } from "next/font/google";
import clsx from "clsx";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

interface INFTCard {
  nft: INFT;
}

export function NFTCard({ nft }: INFTCard) {
  return (
    <div className="bg-background-secondary w-[315px] h-[402px] lg:h-[469px] lg:w-[330px]  rounded-[20px] overflow-hidden">
      <div className="w-[315px] h-[238px] lg:h-[295px] lg:w-[330px]">
        <Image src={nft.image} alt={nft.name} width={330} height={330} />
      </div>
      <footer className="bg-background-secondary p-5">
        <h5>{nft.name}</h5>
        <ArtistCard
          artist={nft.artist}
          variant="small"
          className="mt-1.5 mb-[25px]"
        />
        <div className="flex justify-between">
          <div>
            <p className="text-[#858584] pb-2 text-xs">Price</p>
            <p className={clsx(spaceMono.className, "text-xs lg:text-base")}>
              {nft.price}
              <span> ETH</span>
            </p>
          </div>
          <div>
            <p className="text-[#858584] pb-2 text-xs">Highest bid</p>
            <p className={clsx(spaceMono.className, "text-xs lg:text-base")}>
              {nft.highestBid}
              <span> ETH</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
