import { Button } from '@/components/ui/button/Button';
import { NFTCard } from '@/components/ui/cards/nft-card/NFTCard';
import { INFT } from '@/types/nft.interface';
import Eye from '@/assets/icons/Eye.svg';

interface IDiscoverNFTs {
	nfts: INFT[];
}

export function DiscoverNFTs({ nfts }: IDiscoverNFTs) {
	return (
		<section className="">
			<div className="adaptive-container grid gap-5 lg:grid-cols-2 lg:gap-[30px] 2xl:grid-cols-3 lg:[&>div:nth-child(3n)]:hidden 2xl:[&>div:nth-child(3n)]:block">
				<header className="2xl:col-span-2">
					<p className="section-title">Discover more NFTS</p>
					<p>Explore new Trending NFTS</p>
				</header>
				<Button
					title="See All"
					variant="outlined"
					className="order-last justify-self-end lg:order-none"
					Icon={Eye}
				/>

				{nfts.map((nft) => (
					<NFTCard key={nft.id} nft={nft} />
				))}
			</div>
		</section>
	);
}
