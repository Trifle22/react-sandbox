import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'components';
import { AnimatedTodoList } from 'components/AnimatedTodoList';
import { RealTimeWeather } from 'components/RealtimeWeather';
import { Films } from 'components/Films';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} index />
			<Route path="/animatedTodoList" element={<AnimatedTodoList />} />
			<Route path="/weather" element={<RealTimeWeather />} />
			<Route path="/films" element={<Films />} />
		</Routes>
	);
};
