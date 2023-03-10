import * as React from 'react';
import { useTodosContext } from 'hooks';
import './styles.css';
import { Button, Input } from 'antd';
import { ChangeEvent, useState } from 'react';
import { sendNotification } from 'helpers/sendNotification';

interface IAddTodoProps {
	addTodo: (title: string) => void;
}

export const AddTodoForm = ({ addTodo }: IAddTodoProps) => {
	const [todoTitle, setTodoTitle] = useState<string>('');

	const handleAddTodo = (event: React.FormEvent) => {
		event.preventDefault();
		if (todoTitle.trim() === '') {
			sendNotification({ type: 'error', title: 'Название задачи не может быть пустым' });
			return;
		}
		addTodo(todoTitle);
	};
	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const todoTitle = event.target.value;

		setTodoTitle(todoTitle);
	};

	return (
		<div className="container">
			<form className="formContainer">
				<p className="title">Добавьте вашу задачу</p>
				<Input
					placeholder="Ваша задача"
					size="large"
					className="input"
					allowClear
					onChange={handleOnChange}
				/>
				<Button type="primary" size="large" onClick={handleAddTodo}>
					Добавить
				</Button>
			</form>
		</div>
	);
};
