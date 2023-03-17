import { YMaps, Map, Placemark, ZoomControl, SearchControl } from '@pbe/react-yandex-maps';
import { Spin } from 'antd';
import { CoordsByIPContext } from 'context/CoordsByIP';
import * as React from 'react';
import './styles.css';

export const ThirdSlide = () => {
	return (
		<CoordsByIPContext.Consumer>
			{(value) => {
				const transformedCoords = value.coords.split(',');
				const numericCoords = transformedCoords.map((coord) => +coord);
				return (
					<div className="thirdSlideContainer">
						{numericCoords.length === 1 && <Spin />}
						{numericCoords.length === 2 && (
							<YMaps>
								<Map defaultState={{ center: numericCoords, zoom: 9 }} width={900} height={650}>
									<Placemark geometry={[55.75, 37.57]} />
									<ZoomControl />
									<SearchControl />
								</Map>
							</YMaps>
						)}
					</div>
				);
			}}
		</CoordsByIPContext.Consumer>
	);
};
