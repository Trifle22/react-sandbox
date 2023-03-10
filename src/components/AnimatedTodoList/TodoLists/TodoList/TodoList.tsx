import * as React from 'react';
import { ITodo, ITodoListProps } from 'types/todos';
import { EmptyListMesage } from '../common/EmptyListMesage';
import { Todo } from '../Todo';
import './styles.css';

export const TodoList = ({ todos, deleteTodo, toggleTodoComplete }: ITodoListProps) => {
	let content: React.ReactNode;

	const notCompletedTodos = todos.filter((todo) => !todo.completed);

	if (notCompletedTodos.length === 0) {
		content = <EmptyListMesage text="Список задач пуст" />;
	} else {
		content = (
			<>
				{notCompletedTodos.map((todo: ITodo) => {
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
	return <div className="list">{content}</div>;
};
