import { Rankings } from '@/components/screens/rankings/Rankings';
import { RankingsService } from '@/services/rankings.service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Rankings',
	description: '',
};

export default async function Page() {
	const rankings = await RankingsService.getRankings();
	return <Rankings rankings={rankings} />;
}
