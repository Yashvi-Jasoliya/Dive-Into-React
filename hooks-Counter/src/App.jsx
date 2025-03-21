import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	let [counter, setCounter] = useState(10);

	if (counter < 0) {
		counter = 0;
		setCounter(counter);
	}

	if (counter > 30) {
		counter = 30;
		setCounter(counter);
	}

	// let counter = 1

	const addvalue = () => {
		console.log("Clicked", counter);
		counter = counter + 1;
		setCounter(counter);
	};

	const decreasevalue = () => {
		console.log("Clicked", counter);
		counter = counter - 1;
		setCounter(counter);
	};


	return (
		<>
			{/* <h1>Hello from hooks</h1> */}
			<h1>Add count between 0 to 30 </h1>
			<h2>Counter value : {counter} </h2>
			<button onClick={addvalue}>Add value {counter} </button>
			<button onClick={decreasevalue}>Decrease value {counter} </button>
		</>
	);
}

export default App;
