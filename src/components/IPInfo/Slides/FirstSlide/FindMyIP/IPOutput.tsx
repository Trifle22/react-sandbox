import { Button } from 'antd';
import { handleCopyToClipboard } from 'helpers/handleCopyToClipboard';
import * as React from 'react';
import '../styles.css';

export const IPOutput = ({ IP }: { IP: string }) => {
	const handleOnClick = () => {
		handleCopyToClipboard(IP);
	};
	return (
		<div className="IPOutput">
			<p>{IP}</p>
			<Button onClick={handleOnClick}>Скопировать</Button>
		</div>
	);
};
