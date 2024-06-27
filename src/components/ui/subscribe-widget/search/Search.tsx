import SearchIcon from '@/assets/icons/MagnifyingGlass.svg';
interface ISearch {
	handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Search({ handleOnChange }: ISearch) {
	return (
		<div className="my-2.5 flex items-center justify-between rounded-full border border-background-secondary px-5 py-1">
			<input
				type="text"
				placeholder="Search your favorite NFTs"
				className="w-full bg-main-background px-5 py-[14px] outline-none"
				onChange={(event) => handleOnChange(event)}
			/>
			<SearchIcon />
		</div>
	);
}
