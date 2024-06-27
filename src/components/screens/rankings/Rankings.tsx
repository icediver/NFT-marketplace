import { RankingTabs } from '@/components/ui/ranking-tabs/RankingTabs';
import { IRankingsResponse } from '@/types/ranking.interface';

interface IRankings {
	rankings: IRankingsResponse;
}

export function Rankings({ rankings }: IRankings) {
	return (
		<section>
			<div className="adaptive-container">
				<header>
					<p className="mb-2.5 text-1.75xl font-semibold">Top Creators</p>
					<p>Check out the top ranking NFT artists on the NFT Marketplace</p>
				</header>
				<RankingTabs tabs={Object.keys(rankings)} rankings={rankings} />
			</div>
		</section>
	);
}
