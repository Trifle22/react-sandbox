import { useDroppable } from '@dnd-kit/core';
import * as React from 'react';
import { ITodo, ITodoListProps } from 'types/todos';
import { EmptyListMesage } from '../common/EmptyListMesage';
import { Todo } from '../Todo/Todo';
import './styles.css';

export const TodoList = ({ todos, deleteTodo, toggleTodoComplete }: ITodoListProps) => {
	let content: React.ReactNode;

	const { setNodeRef } = useDroppable({ id: 'droppable' });

	if (todos.length === 0) {
		content = <EmptyListMesage text="Список задач пуст" />;
	} else {
		content = (
			<>
				{todos.map((todo: ITodo) => {
					return (
						<Todo
							todo={todo}
							key={todo.id}
							deleteTodo={deleteTodo}
							toggleTodoComplete={toggleTodoComplete}
						/>
					);
				})}
			</>
		);
	}
	return (
		<div className="list" ref={setNodeRef}>
			{content}
		</div>
	);
};
