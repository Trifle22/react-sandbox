import { useDroppable } from '@dnd-kit/core';
import * as React from 'react';
import { ITodo, ITodoListProps } from 'types/todos';
import { EmptyListMesage } from '../common/EmptyListMesage';
import { Todo } from '../Todo/Todo';
import './styles.css';

export const CompletedTodoList = ({ todos, deleteTodo, toggleTodoComplete }: ITodoListProps) => {
	const completedTodos = todos.filter((todo) => todo.completed);

	const { setNodeRef } = useDroppable({ id: 'droppable' });

	let content: React.ReactNode;

	if (completedTodos.length === 0) {
		content = <EmptyListMesage text="Нет выполненных задач" />;
	} else {
		content = (
			<>
				{todos
					.filter((todo) => todo.completed)
					.map((todo: ITodo) => (
						<Todo
							todo={todo}
							key={todo.id}
							deleteTodo={deleteTodo}
							toggleTodoComplete={toggleTodoComplete}
						/>
					))}
			</>
		);
	}

	return (
		<div className="completed-list" ref={setNodeRef}>
			{content}
		</div>
	);
};
