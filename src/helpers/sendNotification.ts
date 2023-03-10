import { notification } from 'antd';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface INotificationProps {
	type: NotificationType;
	title: string;
}

const config = {
	style: {
		backgroundColor: '#C7C8CA',
	},
};

export const sendNotification = ({ type, title }: INotificationProps) => {
	notification.open({
		message: title,
		type,
		...config,
	});
};
