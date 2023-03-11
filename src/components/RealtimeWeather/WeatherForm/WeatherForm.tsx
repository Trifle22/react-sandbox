import { Button, Select } from 'antd';
import { cities } from 'const/cities';
import { sendNotification } from 'helpers/sendNotification';
import React, { useCallback, useState } from 'react';
import './styles.css';
import { buildWeatherURL } from 'helpers/buildWeatherURL';
import { weatherFetcher } from 'fetchers/weatherFetcher';

interface IWeatherFormProps {
	setIsLoading: (value: boolean) => void;
	setData: (value: any) => void;
	isLoading: boolean;
}

export const WeatherForm = ({ setIsLoading, setData, isLoading }: IWeatherFormProps) => {
	const [city, setCity] = useState('');

	const handleSelectorChange = (value: string) => {
		setCity(value);
	};

	const loadWeatherByCity = async (event: React.FormEvent) => {
		event.preventDefault();

		if (!city) {
			sendNotification({
				type: 'error',
				title: 'Выберите город',
			});
			return;
		}
		setIsLoading(true);

		const url = buildWeatherURL(city);

		const data = await weatherFetcher(url);

		setIsLoading(false);
		setData(data);
	};

	return (
		<form className="form-container">
			<Select
				showSearch
				placeholder="Выберите город"
				optionFilterProp="children"
				onChange={handleSelectorChange}
				filterOption={(input, option) =>
					(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
				}
				options={cities}
				className="city-select"
				disabled={isLoading}
			/>
			<Button type="primary" onClick={loadWeatherByCity}>
				Узнать погоду
			</Button>
		</form>
	);
};
