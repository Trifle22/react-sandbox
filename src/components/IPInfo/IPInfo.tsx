import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import 'swiper/css';
import { FirstSlide, SecondSlide, ThirdSlide } from './Slides';

export const IPInfo = () => {
	return (
		<div className="ipinfo-container">
			<h3 className="title">Узнайте местоположение по IP-адресу</h3>
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
	);
};
