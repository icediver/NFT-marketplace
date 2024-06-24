import { Explore } from './explore/Explore';
import { JoinWeeklyDigest } from './join-weekly-digest/JoinWeeklyDigest';
import { NFTMarketplace } from './nft-marketplace/NFTMarketplace';

export function Footer() {
	return (
		<footer className="bg-background-secondary py-10">
			<div className="adaptive-container grid gap-[30px] 2xl:grid-cols-6">
				<NFTMarketplace />
				<Explore />
				<JoinWeeklyDigest />
			</div>
			<p className="adaptive-container mt-12 border-t-[1px] border-t-[#858584] py-5 text-[#858584]">
				Ⓒ NFT Market. Use this template freely.
			</p>
		</footer>
	);
}
