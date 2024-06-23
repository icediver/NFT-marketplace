import { Button } from "@/components/ui/button/Button";
import { NFTCard } from "@/components/ui/cards/nft-card/NFTCard";
import { INFT } from "@/types/nft.interface";
import Eye from "@/assets/icons/Eye.svg";

interface IDiscoverNFTs {
  nfts: INFT[];
}

export function DiscoverNFTs({ nfts }: IDiscoverNFTs) {
  return (
    <section className="section">
      <div className="adaptive-container grid lg:grid-cols-2 2xl:grid-cols-3 lg:[&>div:nth-child(3n)]:hidden 2xl:[&>div:nth-child(3n)]:block  gap-5 lg:gap-[30px]">
        <header className="2xl:col-span-2">
          <p className="section-title">Discover more NFTS</p>
          <p>Explore new Trending NFTS</p>
        </header>
        <Button
          title="See All"
          variant="outlined"
          className="justify-self-end lg:order-none order-last "
          Icon={Eye}
        />

        {nfts.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </section>
  );
}
