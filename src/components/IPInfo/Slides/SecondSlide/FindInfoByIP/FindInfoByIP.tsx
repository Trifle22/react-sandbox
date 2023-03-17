import { Button, Input, Spin } from 'antd';
import { log } from 'console';
import { CoordsByIPContext } from 'context/CoordsByIP';
import { baseFetcher } from 'fetchers/baseFetcher';
import { buildInfoByIPURL } from 'helpers/buildInfoByIPURL';
import { handleCopyToClipboard } from 'helpers/handleCopyToClipboard';
import { sendNotification } from 'helpers/sendNotification';
import * as React from 'react';
import { useContext, useState } from 'react';
import { InfoOutput } from './InfoOutput';
import './styles.css';

export const FindInfoByIP = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [info, setInfo] = useState<any>();
	const [IP, setIP] = useState('');
	const { setCoords } = useContext(CoordsByIPContext);

	const handleSetIP = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setIP(value);
	};

	const handleFindInfoByIP = async () => {
		setIsLoading(true);
		const response = await baseFetcher(buildInfoByIPURL(IP));
		if (response) {
			setInfo(response);
			setCoords(response.loc as string);
		} else {
			sendNotification({
				type: 'error',
				title: 'Произошла ошибка поиска информации по заданному IP',
			});
		}
		setIsLoading(false);
	};

	return (
		<div className="findInfoContainer">
			<Input placeholder="Введите IP" onChange={handleSetIP} />
			<Button disabled={isLoading} onClick={handleFindInfoByIP}>
				Поиск информации
			</Button>
			{isLoading && <Spin />}
			{info && <InfoOutput info={info} />}
			{info && (
				<Button onClick={() => handleCopyToClipboard(info.loc as string)}>
					Скопировать координаты
				</Button>
			)}
		</div>
	);
};
