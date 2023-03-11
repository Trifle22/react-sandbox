import { Button, Select } from 'antd';
import useSWR from 'swr';
import { cities } from 'const/cities';
import { sendNotification } from 'helpers/sendNotification';
import React, { useCallback, useState } from 'react';
import './styles.css';
import { buildWeatherURL } from 'helpers/buildWeatherURL';
import { weatherFetcher } from 'fetchers/weatherFetcher';

interface IWeatherFormProps {
	setIsLoading: (value: boolean) => void;
	setData: (value: any) => void;
}

export const WeatherForm = ({ setIsLoading, setData }: IWeatherFormProps) => {
	const [city, setCity] = useState('');
	const [shouldFetch, setShouldFetch] = useState<boolean>(false);

	const handleSelectorChange = (value: string) => {
		setCity(value);
	};

	const { data, isLoading } = useSWR(shouldFetch ? buildWeatherURL(city) : null, weatherFetcher, {
		refreshInterval: 1000,
	});

	const loadWeatherByCity = (event: React.FormEvent) => {
		event.preventDefault();

		if (!city) {
			sendNotification({
				type: 'error',
				title: 'Выберите город',
			});
			return;
		}
		setShouldFetch(true);
		setIsLoading(isLoading);
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
