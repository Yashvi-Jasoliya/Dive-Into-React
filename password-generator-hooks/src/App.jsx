import { useState, useCallback, useEffect, useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { select } from "three/tsl";

// useState  --> Hook that allows you to create and manage state in a functional component.
// useCallback --> Hook that memoizes(Remember) a function so it doesn’t get recreated on every render, It helps with performance optimization.
// (it is show the fn will depens on which dependencies and after change it optimized(save in memory))

// useEffect  -->  which dependencies will be changed and then after it render again
// useRef --> takes the reference with other entities


function App() {
	const [length, setLength] = useState(10);
	const [numAllowed, setNumAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

    // useRef

    const passwordRef = useRef(null)


	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numAllowed) str += "0123456789";
		if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

		for (let i = 1; i <= length; i++) {
			const char = Math.floor(Math.random() * str.length + 1);

			pass += str.charAt(char);
		}

		setPassword(pass);
	}, [length, numAllowed, charAllowed]);


    const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select(); // after click copy it will be select
		window.navigator.clipboard.writeText(password); // copy to clipboard
	},[password])


    useEffect(() => {passwordGenerator()}, [
        length, numAllowed, charAllowed, passwordGenerator
    ])
	return (
		<>
			<br></br>

			<div className="w-full max-w-md mx-auto shadow-md text-orange-500 bg-gray-600 rounded-lg px-4 py-3 my-8">
				<h2 className="text-3xl text-center text-white">
					Password Generator
				</h2>
				<div className="flex shadow rounded-lg mb-4 overflow-hidden mt-2">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3 bg-white"
						placeholder="Password"
						readOnly
						ref={passwordRef}
					/>
					<button
						onClick={copyPasswordToClipboard}
						className="outline-none bg-blue-700  text-white px-3 py-0.5 hover:bg-blue-400"
					>
						Copy
					</button>
				</div>

				<div className="flex text-sm gap-x-2">
					<div className="flex items-center gap-x-1">
						<input
							type="range"
							min={8}
							max={25}
							value={length}
							className="cursor-pointer"
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<label>length : {length} </label>
					</div>

					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={numAllowed}
							id="numberInput"
							onChange={() => {
								setNumAllowed((prev) => !prev);
							}}
						/>
						<label htmlFor="numberInput">Numbers</label>
					</div>

					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={charAllowed}
							id="charInput"
							onChange={() => {
								setCharAllowed((prev) => !prev);
							}}
						/>
						<label htmlFor="charInput">Characters</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
