import { useEffect, useState } from 'react';

function App() {
	const [timer, setTimer] = useState<number>(0);
	useEffect(() => {
		let startTimestamp: null | number = null;
		const animate = (timestamp: number) => {
			if (!startTimestamp) {
				startTimestamp = timestamp;
			}
			const elapsed = timestamp - startTimestamp;
			if (elapsed >= 1000) {
				setTimer((timer) => timer + 1);
				startTimestamp = timestamp;
			}
			requestAnimationFrame(animate);
		};
		const animationId = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(animationId);
		};
	}, []);
	return (
		<div>
			<h1>Hello there!</h1>
			<p>Timer: {timer} seconds</p>
		</div>
	);
}

export default App;
