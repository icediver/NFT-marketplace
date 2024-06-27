import { Button } from '@/components/ui/button/Button';
import { IArtist } from '@/types/artist.interface';
import Image from 'next/image';
import Copy from '@/assets/icons/Copy.svg';
import Plus from '@/assets/icons/Plus.svg';
import { Space_Mono } from 'next/font/google';
import clsx from 'clsx';
import { SocialLinks } from '@/components/ui/social-links/SocialLinks';
import { artistNfts } from '@/assets/data/artist-page.data';
import { NFTCard } from '@/components/ui/cards/nft-card/NFTCard';
import { NftsTabs } from '@/components/ui/nfts-tabs/NftsTabs';

interface IArtistPage {
	artist: IArtist;
}

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' });

export function ArtistPage({ artist }: IArtistPage) {
	return (
		<section className="pt-0">
			<header>
				<div className="artist-gradient relative mx-auto h-[250px] w-[375xp] overflow-hidden lg:h-[280px] lg:w-[834px] 2xl:h-[320px] 2xl:w-[1280px]">
					<Image
						src={
							artist.wallpaper || '/images/artist-page/artist-wallpaper-01.png'
						}
						alt={artist.name}
						width={1280}
						height={320}
						className="mx-auto h-[250px] w-auto object-cover lg:h-[280px] 2xl:h-[320px]"
					/>
				</div>
			</header>

			<div className="adaptive-container">
				<Image
					src={artist.avatarPath}
					alt={artist.name}
					width={120}
					height={120}
					className="relative mx-auto -translate-y-1/2 lg:ml-0"
				/>

				<p className="-mt-[30px] mb-[30px] text-1.75xl font-semibold">
					{artist.name}
				</p>
				<div className="flex flex-col items-center gap-5 lg:flex-row">
					<Button title="0x0E3...B79C" Icon={Copy} className="" />
					<Button
						title="Follow"
						Icon={Plus}
						variant="outlined"
						className="!h-[60px]"
					/>
				</div>
				<div className="my-[30px] grid grid-cols-3 lg:w-[510px]">
					<div>
						<p
							className={clsx(
								'text-1.25xl 2xl:text-1.75xl',
								spaceMono.className
							)}
						>
							250k+
						</p>
						<p className="2xl:text-1.25xl">Volume</p>
					</div>
					<div>
						<p
							className={clsx(
								'text-1.25xl 2xl:text-1.75xl',
								spaceMono.className
							)}
						>
							50k+
						</p>
						<p className="2xl:text-1.25xl">NFTs Sold</p>
					</div>
					<div>
						<p
							className={clsx(
								'text-1.25xl font-semibold 2xl:text-1.75xl',
								spaceMono.className
							)}
						>
							3000+
						</p>
						<p className="2xl:text-1.25xl">Followers</p>
					</div>
				</div>
				<p className={clsx('text-[#858584]', spaceMono.className)}>Bio</p>
				<p className="mb-[30px] mt-2.5 text-[#858584]">
					The internet&apos;s Friendliest Designer Kid.
				</p>
				<p className={clsx('mb-[30px] text-[#858584]', spaceMono.className)}>
					Links
				</p>
				<SocialLinks
					youtube={'https://youtube.com'}
					discord={'https://discord.gg'}
					website={'https://www.icediver.com'}
					twitter="https://twitter.com"
					instagram="https://instagram.com"
				/>
			</div>
			<NftsTabs artist={artist} />
		</section>
	);
}
