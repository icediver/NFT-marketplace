import { INFT } from '@/types/nft.interface';
import Image from 'next/image';
import { Space_Mono } from 'next/font/google';
import clsx from 'clsx';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const DynamicArtistCard = dynamic(() => import('../artist-card/ArtistCard'), {
	ssr: false,
});

interface INFTCard {
	nft: INFT;
	variant?: 'light' | 'dark';
}

export function NFTCard({ nft, variant = 'light' }: INFTCard) {
	return (
		<Link
			href={`/nft/${nft.slug}`}
			className={clsx(
				'h-[402px] w-[315px] animate-scaleIn overflow-hidden rounded-[20px] lg:h-[469px] lg:w-[330px]',
				variant === 'light' ? 'bg-background-secondary' : 'bg-main-background'
			)}
		>
			<div className="h-[238px] w-[315px] overflow-hidden lg:h-[295px] lg:w-[330px]">
				<Image src={nft.image} alt={nft.name} width={330} height={330} />
			</div>
			<footer className="p-5">
				<h5>{nft.name}</h5>
				<DynamicArtistCard
					artist={nft.artist}
					variant="small"
					className="mb-[25px] mt-1.5"
				/>
				<div className="flex justify-between">
					<div>
						<p className="pb-2 text-xs text-[#858584]">Price</p>
						<p className={clsx(spaceMono.className, 'text-xs lg:text-base')}>
							{nft.price}
							<span> ETH</span>
						</p>
					</div>
					<div>
						<p className="pb-2 text-xs text-[#858584]">Highest bid</p>
						<p className={clsx(spaceMono.className, 'text-xs lg:text-base')}>
							{nft.highestBid}
							<span> ETH</span>
						</p>
					</div>
				</div>
			</footer>
		</Link>
	);
}
