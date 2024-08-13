'use client';
import { IRankingsResponse } from '@/types/ranking.interface';
import clsx from 'clsx';
import { act, useState } from 'react';
import { log } from 'util';
import { RankingItem } from './ranking-item/RankingItem';

interface ITabs {
	tabs: string[];
	rankings: IRankingsResponse;
	variant?: 'withCount' | 'withoutCount';
}

export function RankingTabs({
	tabs,
	rankings,
	variant = 'withoutCount',
}: ITabs) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			<div className="adaptive-container flex justify-between gap-5 py-4">
				{tabs.map((tab, index) => (
					<button
						key={tab}
						className={clsx(
							'relative mt-10 w-full py-4',
							'after:content-"" after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:scale-0 after:rounded-sm after:bg-[#858584] after:transition-all after:duration-500',
							'hover:after:scale-100 hover:after:bg-white',
							{
								['after:scale-100']: activeTab === index,
							}
						)}
						onClick={() => setActiveTab(index)}
					>
						<div className="flex justify-center gap-1 capitalize lg:gap-4">
							<p>{tab}</p>
							{variant === 'withCount' && (
								<div
									className={clsx(
										'flex h-5 w-10 items-center justify-center rounded-full bg-background-secondary text-sm'
									)}
								>
									{rankings[tabs[activeTab] as keyof IRankingsResponse].length}
								</div>
							)}
						</div>
					</button>
				))}
			</div>
			<header
				className={clsx(
					'my-10 mb-2.5 flex h-[46px] w-[315px] items-center justify-start rounded-[20px] border border-background-secondary px-3 text-sm text-label',
					'lg:w-[690px] lg:px-8',
					'2xl:w-[1050px]'
				)}
			>
				<div className="flex w-[215px] items-center gap-2.5 lg:w-[480px] lg:gap-8 2xl:w-[550px]">
					<p>#</p>
					<p>Artist</p>
				</div>
				<div className="flex items-center justify-between lg:w-[150px] 2xl:w-[450px]">
					<p className="hidden lg:block">Change</p>
					<p className="hidden 2xl:block">NFTs sold</p>
					<p>Volume</p>
				</div>
			</header>
			{tabs.map((tab, index) => (
				<div key={tab} hidden={activeTab !== index}>
					{rankings[tabs[activeTab] as keyof IRankingsResponse].map(
						(item, i) => (
							<RankingItem key={item.id} ranking={item} rating={i} />
						)
					)}
				</div>
			))}
		</div>
	);
}
