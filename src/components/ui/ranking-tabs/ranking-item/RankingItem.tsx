import { IRankingItem } from '@/types/ranking.interface';
import clsx from 'clsx';
import { Space_Mono } from 'next/font/google';
import Image from 'next/image';

interface IRankingItemProps {
	ranking: IRankingItem;
	rating: number;
}

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' });

export function RankingItem({ ranking, rating }: IRankingItemProps) {
	return (
		<div
			className={clsx(
				'my-2.5 flex h-[48px] w-[315px] items-center justify-between gap-2.5 rounded-[20px] bg-background-secondary px-2.5',
				'lg:h-[60px] lg:w-[690px] lg:px-5',
				'2xl:h-[84px] 2xl:w-[1050px]'
			)}
		>
			<div className="flex w-[201px] items-center lg:w-[410px] 2xl:w-[430px]">
				<div
					className={clsx(
						spaceMono.className,
						'mr-2.5 flex h-6 w-6 items-center justify-center rounded-full text-sm lg:mr-5 lg:h-8 lg:w-8 lg:text-base 2xl:bg-main-background'
					)}
				>
					{rating + 1}
				</div>
				<div className="flex w-[168px] items-center gap-3 overflow-hidden lg:w-[300px] lg:text-[22px]">
					<Image
						src={ranking.avatarPath}
						alt="avatar"
						width={60}
						height={60}
						className="h-6 w-6 rounded-full 2xl:h-[60px] 2xl:w-[60px]"
					/>
					<p className="text-nowrap"> {ranking.name}</p>
				</div>
			</div>

			<div
				className={clsx(
					spaceMono.className,
					'hidden text-sm text-[#00AC4F] lg:block lg:text-base'
				)}
			>
				<span>{ranking.change}</span>
				<span>%</span>
			</div>
			<div
				className={clsx(
					spaceMono.className,
					'hidden text-sm lg:block lg:text-base'
				)}
			>
				<span>{ranking.nftsSold}</span>
				<span>%</span>
			</div>

			<div className={clsx(spaceMono.className, 'text-sm lg:text-base')}>
				<span>{ranking.volume}</span>
				<span> ETH</span>
			</div>
		</div>
	);
}
