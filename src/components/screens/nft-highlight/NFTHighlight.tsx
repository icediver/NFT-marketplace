import { ArtistCard } from "@/components/ui/cards/artist-card/ArtistCard";
import { Button } from "@/components/ui/button/Button";
import Eye from "@/assets/icons/Eye.svg";
import dynamic from "next/dynamic";

const Timer = dynamic(
  () => import("@/components/ui/auction-timer/AuctionTimer"),
  { ssr: false },
);

interface INFTHighlight {
  timeExpires: string;
}

export function NFTHighlight({ timeExpires }: INFTHighlight) {
  return (
    <section className="section py-0">
      <div className="2xl:h-[640px] 2xl:w-[1440px] lg:w-[834px] lg:h-[630px] overflow-hidden mx-auto ">
        <div className="flex items-end justify-end w-[375px] h-[510px] bg-[url('/images/highlight/highlight-mobile.png')] lg:w-[834px] lg:h-[630px] lg:bg-[url('/images/highlight/highlight-tablet.png')] 2xl:h-[640px] 2xl:w-[1440px] 2xl:bg-[url('/images/highlight/highlight-desktop.png')] mx-auto py-[60px]">
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 2xl:w-[1050px] lg:w-[670px] w-[315px] mx-auto  rounded-[20px]">
            <div className="lg:row-start-2 lg:col-start-1">
              <ArtistCard
                artist={{
                  name: "Shroomie",
                  avatarPath: "/images/avatars/avatar-09.png",
                }}
                variant="small"
              />
              <p className="section-title py-[30px]">Magic Mashrooms</p>
            </div>
            <Button
              variant="white"
              title="See NFT"
              Icon={Eye}
              className="order-last lg:self-end lg:row-start-3 lg:col-start-1"
            />
            <div className="row-span-2 lg:row-start-2 lg:col-start-2 lf:justify-self-end lg:place-self-end mb-[30px] lg:mb-0">
              <Timer timeExpires={timeExpires} />
            </div>
          </div>
        </div>
        {/*
        <Image
          src="/images/highlight.png"
          alt="highlight"
          width={1440}
          height={640}
          // className="lg:bg-[80%]"
          // sizes="(max-width:1440px) 100vw, 1440px, (max-width:834px) 75vw, 834px"
          sizes="(max-width:834px) 50%"
          style={{ width: "auto", height: "100%", objectFit: "cover" }}
        />
*/}
      </div>
    </section>
  );
}
