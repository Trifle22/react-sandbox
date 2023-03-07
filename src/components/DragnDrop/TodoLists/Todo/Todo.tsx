import * as React from 'react';
import { ITodo } from 'types/todos';
import { Button, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import './style.css';
import { useDraggable } from '@dnd-kit/core';

interface ITodoProps {
	todo: ITodo;
	deleteTodo: (id: string) => void;
	toggleTodoComplete: (id: string) => void;
}
export const Todo = ({ todo, deleteTodo, toggleTodoComplete }: ITodoProps) => {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id: 'draggable',
	});

	const onCheckboxChange = (e: CheckboxChangeEvent) => {
		e.preventDefault();
		e.stopPropagation();
		toggleTodoComplete(todo.id);
	};

	const handleDeleteTodo = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		e.stopPropagation();
		deleteTodo(todo.id);
	};
	return (
		<div className="todo" ref={setNodeRef} {...listeners} {...attributes}>
			<span>{todo.title}</span>
			<div className="actionButtons">
				<Checkbox checked={todo.completed} onChange={onCheckboxChange} />
				<Button onClick={handleDeleteTodo}>Удалить</Button>
			</div>
		</div>
	);
};
