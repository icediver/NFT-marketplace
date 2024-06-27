'use client';
import { NFTCard } from '../cards/nft-card/NFTCard';
import { IArtist } from '@/types/artist.interface';
import clsx from 'clsx';
import { Space_Mono } from 'next/font/google';
import { useState } from 'react';
import { NFTGalery } from '../nft-galery/NFTGalery';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const tabs = ['created', 'owned', 'collection'];

interface INftsTabs {
	artist: IArtist;
}
type TabType = 'created' | 'owned' | 'collection';

export function NftsTabs({ artist }: INftsTabs) {
	const [activeTab, setActiveTab] = useState<TabType>('created');

	return (
		<section className="bg-background-secondary p-0">
			<header className="bg-main-background">
				<div className="adaptive-container grid h-[70px] grid-cols-3 place-items-stretch justify-between gap-5">
					{tabs.map((tab) => (
						<button
							key={tab}
							className={clsx(
								'after:content-"" relative w-full after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:rounded-sm after:bg-[#858584] after:transition-all after:duration-500 hover:after:bg-white hover:2xl:after:w-[350px]',
								{
									['after:w-[90px] after:lg:w-[220px] after:2xl:w-[350px]']:
										activeTab === tab,
								}
							)}
							onClick={() => setActiveTab(tab as TabType)}
						>
							<div className="flex justify-center gap-1 lg:gap-4">
								<p>{tab}</p>
								<div
									className={clsx(
										'flex h-5 w-10 items-center justify-center rounded-full bg-background-secondary text-sm',
										spaceMono.className
									)}
								>
									{artist[tab as TabType].length}
								</div>
							</div>
						</button>
					))}
				</div>
			</header>
			{activeTab === 'created' && <NFTGalery nfts={artist.created} />}
			{activeTab === 'owned' && <NFTGalery nfts={artist.owned} />}
			{activeTab === 'collection' && <NFTGalery nfts={artist.collection} />}
		</section>
	);
}
