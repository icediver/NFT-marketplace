import { ArtistCard } from "@/components/ui/cards/artist-card/ArtistCard";
import { Button } from "@/components/ui/button/Button";
import { IArtist } from "@/types/artist.interface";

interface ITopRatedArtists {
  creators: IArtist[];
}

export function TopRatedArtists({ creators }: ITopRatedArtists) {
  return (
    <section className="section">
      <div className="adaptive-container leading-snug flex flex-col">
        <header className="lg:grid lg:grid-cols-2 lg:place-items-end 2xl:flex 2xl:justify-between 2xl:items-center mb-10 2xl:mb-[60px]">
          <div>
            <p className="2xl:text-2.25xl text-1.75xl 2xl:leading-tight font-semibold pb-1.5">
              Top Creators
            </p>
            <p className="2xl:text-1.25xl">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <Button
            title="View Rankings"
            variant="outlined"
            className="hidden lg:flex"
          />
        </header>

        <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-[30px]">
          {creators.map((artist) => (
            <ArtistCard artist={artist} key={artist.name} />
          ))}
        </div>
        <Button
          title="View Rankings"
          variant="outlined"
          className="lg:hidden mt-[30px]"
        />
      </div>
    </section>
  );
}
