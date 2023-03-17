import { YMaps, Map, Placemark, ZoomControl, SearchControl } from '@pbe/react-yandex-maps';
import * as React from 'react';
import './styles.css';

export const ThirdSlide = () => {
	return (
		<div className="thirdSlideContainer">
			<YMaps>
				<Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width={900} height={650}>
					<Placemark geometry={[55.75, 37.57]} />
					<ZoomControl />
					<SearchControl />
				</Map>
			</YMaps>
		</div>
	);
};
