import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import 'swiper/css';
import { FirstSlide, SecondSlide, ThirdSlide } from './Slides';
import { useState } from 'react';
import { CoordsByIPContext } from 'context/CoordsByIP';

export const IPInfo = () => {
	const [coords, setCoords] = useState('');

	const contextValue = { coords, setCoords };
	return (
		<CoordsByIPContext.Provider value={contextValue}>
			<div className="ipinfo-container">
				<h3 className="title">Узнайте местоположение вашего оператора по IP-адресу</h3>
				<Swiper spaceBetween={50} slidesPerView={1} className="swiper-container" effect="fade">
					<SwiperSlide>
						<FirstSlide />
					</SwiperSlide>
					<SwiperSlide>
						<SecondSlide />
					</SwiperSlide>
					<SwiperSlide>
						<ThirdSlide />
					</SwiperSlide>
				</Swiper>
			</div>
		</CoordsByIPContext.Provider>
	);
};
