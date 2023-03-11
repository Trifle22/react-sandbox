import { Spin } from 'antd';
import * as React from 'react';
import { EmptyDataMessage } from './EmptyDataMessage';
import { WeatherView } from './WeatherView';

interface IWeatherOutputProps {
	weatherData: any;
	isLoading: boolean;
}

export const WeatherOutput = ({ weatherData, isLoading }: IWeatherOutputProps) => {
	let content: JSX.Element;

	if (weatherData) {
		content = <WeatherView weatherData={weatherData} />;
	} else {
		content = <EmptyDataMessage />;
	}

	if (isLoading) {
		return <Spin />;
	}

	return content;
};
