import AuctionTimer from '@/components/ui/auction-timer/AuctionTimer';
import { Button } from '@/components/ui/button/Button';
import ArtistCard from '@/components/ui/cards/artist-card/ArtistCard';
import { INFT } from '@/types/nft.interface';
import clsx from 'clsx';
import { Space_Mono } from 'next/font/google';
import Image from 'next/image';
import Globe from '@/assets/icons/Globe.svg';
import Link from 'next/link';
import { NFTGalery } from '@/components/ui/nft-galery/NFTGalery';
import { timeExpires } from '@/utils/time-expires.utils';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });

interface INFTPage {
	nft: INFT;
}

export function NFTPage({ nft }: INFTPage) {
	return (
		<section className="p-0">
			<div className="mx-auto h-[320px] w-[375px] overflow-hidden lg:h-[420px] lg:w-[834px] 2xl:h-[560px] 2xl:w-[1280px]">
				<Image
					src={nft.image}
					width={1280}
					height={560}
					alt={nft.name}
					className="mx-auto h-[320px] w-[375px] object-cover lg:h-[420px] lg:w-[834px] 2xl:h-[560px] 2xl:w-[1280px]"
				/>
			</div>
			<div className="adaptive-container grid py-10 lg:grid-cols-2">
				<header className="lg:col-start-1">
					<p className="text-1.75xl font-semibold">{nft.name}</p>

					<p className="pt-2.5 text-label">
						Minted on
						<span>
							{new Date(nft.minted).toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
								year: 'numeric',
							})}
						</span>
					</p>
				</header>
				<div className="row-span-2 lg:col-start-2 lg:justify-self-end">
					{nft.auctionEnds && (
						<AuctionTimer
							className="my-5 lg:my-0"
							// timeExpires={nft.auctionEnds}
							// Todo: fix timeExpires
							timeExpires={timeExpires()}
						>
							<Button title="Place Bid" className="mt-[30px]" />
						</AuctionTimer>
					)}
				</div>
				<div className="lg:col-start-1">
					<p className={clsx('text-label', spaceMono.className)}>Created By</p>
					<ArtistCard artist={nft.artist} variant="small" className="my-2.5" />
					<p className={clsx('py-5 text-label', spaceMono.className)}>
						Description
					</p>
					<p className="mb-2.5">{nft.description}</p>

					<p className={clsx('py-5 text-label', spaceMono.className)}>
						Details
					</p>
					<div>
						<div className="flex items-center gap-2.5">
							<Globe className="[&>path]:fill-label" />
							<Link href={nft.etherscanLink || ''}>View on Etherscan</Link>
						</div>
						<div className="flex items-center gap-2.5 py-2.5">
							<Globe className="[&>path]:fill-label" />
							<Link href={nft.originalLink || ''}>View Original</Link>
						</div>
					</div>
					{!!nft.tags?.length && (
						<div className="flex flex-col">
							<p className={clsx('py-2.5 text-label', spaceMono.className)}>
								Tags
							</p>
							{nft.tags.map((tag, index) => (
								<button
									key={index}
									className={clsx(
										'my-2.5 w-fit rounded-full bg-background-secondary px-[30px] py-4 uppercase',
										spaceMono.className
									)}
								>
									{tag}
								</button>
							))}
						</div>
					)}
				</div>
				<div>
					<p>More From This Artist</p>
					<Link href={`/artist/${nft.artist.slug}`}>Go To The Artist Page</Link>
					<NFTGalery nfts={nft.artist.collection} variant="light" />
				</div>
			</div>
		</section>
	);
}
