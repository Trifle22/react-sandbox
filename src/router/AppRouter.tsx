import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'components';
import { AnimatedTodoList } from 'components/AnimatedTodoList';
import { RealTimeWeather } from 'components/RealtimeWeather';
import { Parallax } from 'components/Parallax';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} index />
			<Route path="/animatedTodoList" element={<AnimatedTodoList />} />
			<Route path="/weather" element={<RealTimeWeather />} />
			<Route path="/parallax" element={<Parallax />} />
		</Routes>
	);
};
