import { IArtist } from '@/types/artist.interface';
import clsx from 'clsx';
import { Avatar } from './avatar/Avatar';
import { Space_Mono } from 'next/font/google';
import { HTMLAttributes } from 'react';
import Link from 'next/link';

interface IArtistCardProps extends HTMLAttributes<HTMLDivElement> {
	artist: IArtist;
	variant?: 'small' | 'large' | 'medium' | 'default';
}

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400' });

export function ArtistCard({
	artist: { name, avatarPath, totalSales = 0, notificationCount = 0, slug },
	variant = 'default',

	className,
}: IArtistCardProps) {
	return (
		<Link
			href={`/artist/${slug}`}
			className={clsx('relative hidden', className, {
				['!flex items-center gap-3']: variant === 'small',
				['h-[100px] w-[315px] items-center justify-center rounded-[20px] bg-background-secondary p-5 lg:w-[330px] 2xl:flex 2xl:h-60 2xl:w-60 2xl:flex-col [&:nth-child(-n+5)]:flex lg:[&:nth-child(-n+6)]:!flex']:
					variant === 'default',
			})}
		>
			<Avatar
				avatarPath={avatarPath}
				variant={variant}
				className={clsx({ ['2xl:mb-5']: variant === 'default' })}
			/>

			<div>
				<p
					className={clsx({
						['pb-1.25 text-1.25xl font-semibold']: variant === 'default',
					})}
				>
					{name}
				</p>
				{!!totalSales && (
					<p>
						<span className="text-[#858584]">Total Sales: </span>
						<span className={spaceMono.className}>{totalSales} ETH</span>
					</p>
				)}
				{!!notificationCount && (
					<div
						className={clsx(
							'absolute flex h-[30px] w-[30px] items-center justify-center rounded-full bg-main-background',
							{ ['left-5 top-5']: variant === 'default' }
						)}
					>
						{notificationCount}
					</div>
				)}
			</div>
		</Link>
	);
}
