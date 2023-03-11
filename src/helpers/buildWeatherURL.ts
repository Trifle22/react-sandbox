import { WEATHER_API_KEY, WEATHER_URL } from 'const/keys';

export const buildWeatherURL = (city: string) => {
	const searchParams = new URLSearchParams();
	searchParams.set('key', WEATHER_API_KEY);
	searchParams.set('q', city);

	return `${WEATHER_URL}?${searchParams}`;
};
