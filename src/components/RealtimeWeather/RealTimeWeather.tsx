import * as React from 'react';
import { useState } from 'react';
import './styles.css';
import { WeatherForm } from './WeatherForm';
import { WeatherOutput } from './WeatherOutput';

export const RealTimeWeather = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className="container">
			<WeatherForm setData={setData} setIsLoading={setIsLoading} />
			<WeatherOutput weatherData={data} isLoading={isLoading} />
		</div>
	);
};
