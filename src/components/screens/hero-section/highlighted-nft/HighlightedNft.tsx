import austronaut from "@/assets/images/astronaut.png";
import { ArtistCard } from "@/components/ui/cards/artist-card/ArtistCard";
import Image from "next/image";
export function HighlightedNft() {
  return (
    <div className="w-[315px] h-[315px] lg:w-[330px] lg:h-[330px] 2xl:w-[510px] 2xl:h-[510px] rounded-[20px] bg-background-secondary overflow-hidden">
      <div className="w-full h-[206px] lg:h-[221px] 2xl:h-[401px] overflow-hidden">
        <Image
          src={austronaut}
          alt="austronaut"
          width={510}
          height={510}
          className="-mt-5"
        />
      </div>
      <footer className="px-5 py-[22px]">
        <p className="text-1.25xl font-semibold mb-2.5">Space Walking</p>
        <ArtistCard
          artist={{
            name: "Animakid",
            avatarPath: "/images/avatars/avatar-14.png",
          }}
          variant="small"
        />
      </footer>
    </div>
  );
}
