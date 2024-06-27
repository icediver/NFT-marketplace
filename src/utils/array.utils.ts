export function shuffleArray<T>(array: T[]) {
	const copyArray = [...array];
	let currentIndex = copyArray.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[copyArray[currentIndex], copyArray[randomIndex]] = [
			copyArray[randomIndex],
			copyArray[currentIndex],
		];
	}
	return copyArray;
}
