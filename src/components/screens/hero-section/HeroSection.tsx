import { Button } from "@/components/ui/button/Button";
import { HighlightedNft } from "./highlighted-nft/HighlightedNft";

import { Statistics } from "@/components/ui/statistics/Statistics";

export function HeroSection() {
  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 adaptive-container 2xl:gap-x-8">
        <header className="lg:w-[330px] 2xl:w-[510px]">
          <h1 className="text-1.75xl lg:text-3.5xl 2xl:text-6xl font-semibold leading-snug lg:leading-tight 2xl:leading-base mb-2.5">
            Discover digital art & Collect NFTs
          </h1>
          <p className="mb-10 lg:mb-0 2xl:text-1.25xl leading-relaxed 2xl:capitalize">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </header>
        <div className="lg:order-2 lg:row-span-2 justify-self-end">
          <HighlightedNft />
        </div>
        <div className="lg:order-3 lg:w-[330px] 2xl:w-[510px]">
          <Button title="Explore Now" className="my-10 lg:my-5" />
          <Statistics total={240} auctions={100} artists={240} />
        </div>
      </div>
    </section>
  );
}
