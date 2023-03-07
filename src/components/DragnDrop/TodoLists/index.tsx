import * as React from 'react';
import { DndContext } from '@dnd-kit/core';
import { ITodoListProps } from 'types/todos';
import { TodoList } from './TodoList';
import { CompletedTodoList } from './CompletedTodoList';
import './styles.css';

export const TodoLists = ({ todos, deleteTodo, toggleTodoComplete }: ITodoListProps) => {
	return (
		<DndContext>
			<div className="lists-container">
				<TodoList todos={todos} deleteTodo={deleteTodo} toggleTodoComplete={toggleTodoComplete} />
				<CompletedTodoList
					todos={todos}
					deleteTodo={deleteTodo}
					toggleTodoComplete={toggleTodoComplete}
				/>
			</div>
		</DndContext>
	);
};
