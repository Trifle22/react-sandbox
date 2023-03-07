import { buildTodo } from 'helpers/buildTodo';
import * as React from 'react';
import { useState } from 'react';
import { ITodo } from '../types/todos';

export const useTodosContext = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const addTodo = (title: string): void => {
		const todo = buildTodo(title);
		setTodos((prev) => [...prev, todo]);
	};

	const deleteTodo = (id: string): void => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const toggleTodoComplete = (id: string): void => {
		const updatedTodos = [...todos].map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}

			return todo;
		});
		setTodos(updatedTodos);
		console.log(todos);
	};

	return {
		todos,
		addTodo,
		deleteTodo,
		toggleTodoComplete,
	};
};
