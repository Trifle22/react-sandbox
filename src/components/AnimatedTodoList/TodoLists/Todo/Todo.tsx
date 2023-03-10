import * as React from 'react';
import { ITodo } from 'types/todos';
import { Button, Checkbox } from 'antd';
import { Transition } from 'react-transition-group';
import './style.css';
import { useEffect, useRef, useState } from 'react';

interface ITodoProps {
	todo: ITodo;
	deleteTodo: (id: string) => void;
	toggleTodoComplete: (id: string) => void;
}
export const Todo = ({ todo, deleteTodo, toggleTodoComplete }: ITodoProps) => {
	const [inProp, setInProp] = useState(false);
	const nodeRef = useRef(null);
	useEffect(() => {
		setInProp(true);
	}, []);

	type StylesType = Record<string, React.CSSProperties>;

	const defaultStyles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '500px',
		padding: '10px',
		opacity: 1,
		transition: 'opacity 1s ease-in-out',
	};

	const transitionStyles: StylesType = {
		entering: { opacity: 0 },
		entered: { opacity: 1 },
		exiting: { opacity: 1 },
		exited: { opacity: 0 },
	};

	function onCheckboxChange() {
		toggleTodoComplete(todo.id);
	}

	const handleDeleteTodo = () => {
		deleteTodo(todo.id);
	};

	return (
		<Transition nodeRef={nodeRef} in={inProp} timeout={500}>
			{(state) => {
				console.log(state);

				return (
					<div style={{ ...defaultStyles, ...transitionStyles[state] }}>
						<span>{todo.title}</span>
						<div className="actionButtons">
							<Checkbox checked={todo.completed} onChange={onCheckboxChange} />
							<Button onClick={handleDeleteTodo}>Удалить</Button>
						</div>
					</div>
				);
			}}
		</Transition>
	);
};
