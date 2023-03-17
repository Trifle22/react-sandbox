import * as React from 'react';
import './styles.css';

export const InfoOutput = ({ info }: { info: any }) => {
	return (
		<div className="infoOutput">
			<p>Город: {info.city}</p>
			<p>Страна: {info.country}</p>
			<p>Организация: {info.org}</p>
			<p>Регион: {info.region}</p>
			<p>Часовой пояс: {info.timerzone}</p>
			<p>Координаты: {info.loc}</p>
		</div>
	);
};
