import { rankings } from '@/assets/data/rankings.data';
import { IRankingsResponse } from '@/types/ranking.interface';
import { shuffleArray } from '@/utils/array.utils';

export const RankingsService = {
	async getRankings(): Promise<IRankingsResponse> {
		const thisWeek = shuffleArray(rankings);
		const thisMonth = shuffleArray(rankings);
		const allTime = shuffleArray(rankings);

		const response = {
			today: rankings,
			'this week': thisWeek,
			'this month': thisMonth,
			'all time': allTime,
		};
		if (!response) {
			throw new Error('Artist not found');
		}

		console.log('response', response);

		return response;
	},
};
