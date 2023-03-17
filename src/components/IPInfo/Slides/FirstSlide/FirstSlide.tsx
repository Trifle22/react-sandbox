import { Button } from 'antd';
import * as React from 'react';
import { useSwiper } from 'swiper/react';
import { FindMyIP } from './FindMyIP';
import './styles.css';

export const FirstSlide = () => {
	const swiper = useSwiper();

	const handleSetNextSlide = () => {
		swiper.slideNext();
	};
	return (
		<div className="first-slide">
			<FindMyIP />
		</div>
	);
};
