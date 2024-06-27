import austronaut from '@/assets/images/astronaut.png';
import ArtistCard from '@/components/ui/cards/artist-card/ArtistCard';
import Image from 'next/image';
export function HighlightedNft() {
	return (
		<div className="h-[315px] w-[315px] overflow-hidden rounded-[20px] bg-background-secondary lg:h-[330px] lg:w-[330px] 2xl:h-[510px] 2xl:w-[510px]">
			<div className="h-[206px] w-full overflow-hidden lg:h-[221px] 2xl:h-[401px]">
				<Image
					src={austronaut}
					alt="austronaut"
					width={510}
					height={510}
					className="-mt-5"
				/>
			</div>
			<footer className="px-5 py-[22px]">
				<p className="mb-2.5 text-1.25xl font-semibold">Space Walking</p>
				<ArtistCard
					artist={{
						name: 'Animakid',
						avatarPath: '/images/avatars/avatar-14.png',
						slug: 'animakid',
						created: [],
						owned: [],
						collection: [],
					}}
					variant="small"
				/>
			</footer>
		</div>
	);
}
