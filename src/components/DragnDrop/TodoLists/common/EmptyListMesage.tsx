import * as React from 'react';

interface IProps {
	text: string;
}

export const EmptyListMesage = ({ text }: IProps) => {
	return <p>{text}</p>;
};
