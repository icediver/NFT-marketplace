import { Button } from '@/components/ui/button/Button';
import { HighlightedNft } from './highlighted-nft/HighlightedNft';

import Rocket from '@/assets/icons/RocketLaunch.svg';

import { Statistics } from '@/components/ui/statistics/Statistics';

export function HeroSection() {
	return (
		<section className="">
			<div className="adaptive-container grid lg:grid-cols-2 lg:grid-rows-2 2xl:gap-x-8">
				<header className="lg:w-[330px] 2xl:w-[510px]">
					<h1 className="mb-2.5 text-1.75xl font-semibold leading-snug lg:text-3.5xl lg:leading-tight 2xl:text-6xl 2xl:leading-base">
						Discover digital art & Collect NFTs
					</h1>
					<p className="mb-10 leading-relaxed lg:mb-0 2xl:text-1.25xl 2xl:capitalize">
						NFT marketplace UI created with Anima for Figma. Collect, buy and
						sell art from more than 20k NFT artists.
					</p>
				</header>
				<div className="justify-self-end lg:order-2 lg:row-span-2">
					<HighlightedNft />
				</div>
				<div className="lg:order-3 lg:w-[330px] 2xl:w-[510px]">
					<Button title="Explore Now" className="my-10 lg:my-5" Icon={Rocket} />
					<Statistics total={240} auctions={100} artists={240} />
				</div>
			</div>
		</section>
	);
}
