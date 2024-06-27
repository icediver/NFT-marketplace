import { useDebounce } from '@/hooks/useDebounce';
import { INFT } from '@/types/nft.interface';
import { useEffect, useMemo, useState } from 'react';

export interface ISearch {
	nfts: INFT[];
}

export const useSearch = ({ nfts }: ISearch) => {
	const [searchTerm, setSearchTerm] = useState('');

	const searchParams = useMemo(
		() => ({
			searchTerm: searchTerm.toLowerCase(),
		}),
		[searchTerm]
	);

	const debouncedSearch = useDebounce(searchParams, 500);

	const data = nfts.filter((item) => {
		if (item.name.toLowerCase().includes(debouncedSearch.searchTerm)) {
			return item;
		}
	});

	return {
		data,
		searchTerm,
		setSearchTerm,
	};
};
