import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import { StylesType } from 'types/styles';

interface IWeatherOutputProps {
	weatherData: any;
	isLoading: boolean;
}

export const WeatherOutput = ({ weatherData, isLoading }: IWeatherOutputProps) => {
	const [inProp, setInProp] = useState(false);
	const nodeRef = useRef(null);
	useEffect(() => {
		setInProp(true);
	}, []);

	const defaultStyles = {
		gap: '20px',
		padding: '10px',
		border: 'solid 1px white',
		borderRadius: '10px',
		opacity: 1,
		transition: 'opacity 1s ease-in-out',
	};

	const defaultEmptyMessageStyles = {
		opacity: 1,
		transition: 'opacity 1s ease-in-out',
	};

	const transitionStyles: StylesType = {
		entering: { opacity: 0 },
		entered: { opacity: 1 },
		exiting: { opacity: 1 },
		exited: { opacity: 0 },
	};

	let content: JSX.Element;

	const renderContent = (state: TransitionStatus) => {
		if (weatherData) {
			return (
				<div style={{ ...defaultStyles, ...transitionStyles[state] }}>
					<p>Погода по городу</p>
					<p>Местное время: {weatherData?.location?.localtime}</p>
					<p>Температура: {weatherData?.current?.temp_c}&#176;C</p>
					<p>Ощущается как: {weatherData?.current?.feelslike_c}&#176;C</p>
					<p>Время суток: {weatherData?.current?.is_day ? 'день' : 'ночь'}</p>
					<p>Видимость: {weatherData?.current?.vis_km}км</p>
					<p>Ветер: {weatherData?.current?.wind_kph} км/ч</p>
				</div>
			);
		}

		return (
			<div style={{ ...defaultEmptyMessageStyles, ...transitionStyles[state] }}>
				Выберите город из списка для показа погоды
			</div>
		);
	};

	return (
		<Transition nodeRef={nodeRef} in={inProp} timeout={500}>
			{(state) => renderContent(state)}
		</Transition>
	);
};
