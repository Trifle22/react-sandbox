import * as React from 'react';
import { gsap, Sine, Linear } from 'gsap';
import './styles.css';
import { Button } from 'antd';

gsap.registerPlugin(Sine);
gsap.registerPlugin(Linear);

export const GSAPTests = () => {
	const getRandInt = () => gsap.utils.random(-100, 100, 1, true);
  const tween = gsap.to('.square', {


    
  })
	const onClick = () => {
		tn1.play();
	};

	return (
		<div className="gsapContainer">
			<Button onClick={onClick}>Старт</Button>
			<div className="square" />
		</div>
	);
};
