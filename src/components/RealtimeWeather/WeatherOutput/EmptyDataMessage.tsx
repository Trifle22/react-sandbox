import { EmptyListMesage } from 'components/AnimatedTodoList/TodoLists/common/EmptyListMesage';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import { StylesType } from 'types/styles';

export const EmptyDataMessage = () => {
	const [inProp, setInProp] = useState(false);
	const nodeRef = useRef(null);
	useEffect(() => {
		setInProp(true);
	}, []);

	const defaultEmptyMessageStyles = {
		opacity: 1,
		transition: 'opacity 1s ease-in-out',
	};

	const transitionStyles: StylesType = {
		entering: { opacity: 0 },
		entered: { opacity: 1 },
		exiting: { opacity: 1 },
		exited: { opacity: 0 },
	};

	return (
		<Transition nodeRef={nodeRef} in={inProp} timeout={500}>
			{(state) => (
				<div style={{ ...defaultEmptyMessageStyles, ...transitionStyles[state] }}>
					<EmptyListMesage text="Выберите город из списка для показа погоды" />
				</div>
			)}
		</Transition>
	);
};
