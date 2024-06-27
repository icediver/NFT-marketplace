import { INFT } from '@/types/nft.interface';
import { NFTCard } from '../cards/nft-card/NFTCard';
import clsx from 'clsx';

interface INFTGalery {
	nfts: INFT[];
	variant?: 'light' | 'dark';
}

export function NFTGalery({ nfts, variant = 'dark' }: INFTGalery) {
	return (
		<div className="adaptive-container py-20">
			<div
				className={clsx(
					'grid gap-[30px] lg:grid-cols-2 2xl:grid-cols-3',
					'[&>a:nth-child(n+4)]:hidden',
					'lg:[&>a:nth-child(n+4)]:block lg:[&>a:nth-child(n+7)]:hidden',
					'2xl:[&>a:nth-child(n+10)]:hidden 2xl:[&>a:nth-child(n+7)]:block'
				)}
			>
				{nfts.map((nft) => (
					<NFTCard key={nft.id} nft={nft} variant={variant} />
				))}
			</div>
		</div>
	);
}
