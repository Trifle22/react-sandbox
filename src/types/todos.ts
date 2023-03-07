export interface ITodo {
	id: string;
	title: string;
	completed: boolean;
}

export interface ITodoListProps {
	todos: ITodo[];
	deleteTodo: (id: string) => void;
	toggleTodoComplete: (id: string) => void;
}
