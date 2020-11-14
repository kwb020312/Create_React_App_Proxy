import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
	const testData = async () => {
		console.log(await fetch('/data.json').then((res) => res.json()));
	};
	useEffect(() => {
		testData();
	}, []);
	return <div>hi</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
