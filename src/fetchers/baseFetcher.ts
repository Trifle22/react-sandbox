export const baseFetcher = async (url: string) => {
	return fetch(url).then((res) => res.json());
};
