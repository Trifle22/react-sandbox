import { ITodo } from 'types/todos';
import { v4 as uuidv4 } from 'uuid';

export const buildTodo = (title: string): ITodo => {
	return {
		title: title,
		id: uuidv4(),
		completed: false,
	};
};
