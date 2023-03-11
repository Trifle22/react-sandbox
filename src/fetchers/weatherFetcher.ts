export const weatherFetcher = async (url: string) => {
	return fetch(url).then((res) => res.json());
};
