import * as React from 'react';
import { Button, Spin } from 'antd';
import '../styles.css';
import { baseFetcher } from 'fetchers/baseFetcher';
import { FIND_MY_API_URL } from 'const/keys';
import { useState } from 'react';
import { IPOutput } from './IPOutput';
import { sendNotification } from 'helpers/sendNotification';

export const FindMyIP = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [IP, setIP] = useState();

	const handleFindIP = async () => {
		setIsLoading(true);
		const response = await baseFetcher(FIND_MY_API_URL);
		if (response.ip) {
			setIP(response.ip);
		} else {
			sendNotification({
				type: 'error',
				title: 'Произошла ошибка поиска вашего IP',
			});
		}
		setIsLoading(false);
	};

	return (
		<div className="findIPContainer">
			<Button disabled={isLoading} onClick={handleFindIP}>
				Узнать свой IP
			</Button>
			{isLoading && <Spin />}
			{IP && <IPOutput IP={IP} />}
		</div>
	);
};
