import * as React from 'react';
import { useTodosContext } from 'hooks';
import { AddTodoForm } from './AddTodoForm';
import './styles.css';
import { TodoLists } from './TodoLists';

export const DragnDrop = () => {
	const { todos, addTodo, deleteTodo, toggleTodoComplete } = useTodosContext();

	return (
		<div className="dnd-container">
			<AddTodoForm addTodo={addTodo} />
			<TodoLists todos={todos} deleteTodo={deleteTodo} toggleTodoComplete={toggleTodoComplete} />
		</div>
	);
};
