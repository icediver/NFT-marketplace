'use client';
import { useCountdown } from '@/hooks/useCoutdown';
import clsx from 'clsx';
import { Space_Mono } from 'next/font/google';
import { HTMLAttributes } from 'react';

const spaceMono = Space_Mono({
	weight: ['400', '700'],
	subsets: ['latin'],
});
interface IAuctionTimer extends HTMLAttributes<HTMLDivElement> {
	timeExpires: string;
	children?: React.ReactNode;
	className?: string;
}

export default function AuctionTimer({
	timeExpires,
	children,
	className,
}: IAuctionTimer) {
	const [hours, minutes, seconds] = useCountdown(timeExpires);

	return (
		<div
			className={clsx(
				'w-[315px] rounded-[20px] p-[30px] timer-panel lg:w-[295px]',
				spaceMono.className,
				className
			)}
		>
			<div>
				<p className="text-xs">Auction ends in:</p>
				<div className="grid grid-cols-3 text-3xl">
					<p>{hours}:</p>
					<p>{minutes}:</p>
					<p>{seconds}</p>
					<p className="text-xs">Hours</p>
					<p className="text-xs">Minutes</p>
					<p className="text-xs">Seconds</p>
				</div>
			</div>
			{children}
		</div>
	);
}
