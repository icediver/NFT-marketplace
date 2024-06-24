import { ArtistCard } from '@/components/ui/cards/artist-card/ArtistCard';
import { Button } from '@/components/ui/button/Button';
import { IArtist } from '@/types/artist.interface';
import Rocket from '@/assets/icons/RocketLaunch.svg';

interface ITopRatedArtists {
	creators: IArtist[];
}

export function TopRatedArtists({ creators }: ITopRatedArtists) {
	return (
		<section className="">
			<div className="adaptive-container flex flex-col leading-snug">
				<header className="mb-10 lg:grid lg:grid-cols-2 lg:place-items-end 2xl:mb-[60px] 2xl:flex 2xl:items-center 2xl:justify-between">
					<div>
						<p className="pb-1.5 text-1.75xl font-semibold 2xl:text-2.25xl 2xl:leading-tight">
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

				<div className="grid gap-[30px] lg:grid-cols-2 2xl:grid-cols-4">
					{creators.map((artist) => (
						<ArtistCard artist={artist} key={artist.name} />
					))}
				</div>
				<Button
					title="View Rankings"
					variant="outlined"
					className="mt-[30px] lg:hidden"
					Icon={Rocket}
				/>
			</div>
		</section>
	);
}
