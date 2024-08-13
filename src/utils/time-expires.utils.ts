export function timeExpires() {
	const date = new Date();
	date.setHours(date.getHours() + 28);

	return date.toLocaleString().split('T')[0];
}
