'use client';
import { NFTGalery } from '@/components/ui/nft-galery/NFTGalery';
import { Search } from '@/components/ui/subscribe-widget/search/Search';
import { useSearch } from '@/hooks/useSearch';
import { INFT } from '@/types/nft.interface';

interface IMarketplace {
	nfts: INFT[];
}

export function Marketplace({ nfts }: IMarketplace) {
	const { data, searchTerm, setSearchTerm } = useSearch({ nfts });

	return (
		<section>
			<div className="adaptive-container">
				<header>
					<p className="mb-2.5 text-1.75xl font-semibold lg:text-3.5xl 2xl:text-[51px]">
						Browse Marketplace
					</p>
					<p className="mb-[30px] text-base 2xl:text-1.5xl">
						Browse through more than 50k NFTs on the NFT Marketplace
					</p>
					<Search handleOnChange={(e) => setSearchTerm(e.target.value)} />
				</header>
				<NFTGalery nfts={data} variant="light" />
			</div>
		</section>
	);
}
