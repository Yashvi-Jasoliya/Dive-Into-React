import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [color, setColor] = useState("olive");

	return (
		<>
			<h1 className="top-40 fixed d-flex justify-content-center align-middle px-2 inset-x-0" style={{fontSize:"3rem"}}>
				Theme Change
			</h1>
			<div
				className="w-full h-screen duration-300"
				style={{ backgroundColor: color }}
			>
				<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
					<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
						<button
							onClick={() => setColor("red")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "red" }}
						>
							Red
						</button>
						<button
							onClick={() => setColor("orange")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "orange" }}
						>
							Orange
						</button>
						<button
							onClick={() => setColor("black")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "black" }}
						>
							Black
						</button>

						<button
							onClick={() => setColor("green")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "green" }}
						>
							Green
						</button>

						<button
							onClick={() => setColor("#AD343E")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "#AD343E" }}
						>
							Pink
						</button>

						<button
							onClick={() => setColor("purple")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "purple" }}
						>
							Purple
						</button>

						<button
							onClick={() => setColor("brown")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "brown" }}
						>
							Brown
						</button>

						<button
							onClick={() => setColor("blue")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "blue" }}
						>
							Blue
						</button>

						<button
							onClick={() => setColor("#50858B")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "#50858B" }}
						>
							Cyan
						</button>

						<button
							onClick={() => setColor("#EF798A")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "#EF798A" }}
						>
							Lavender
						</button>

						<button
							onClick={() => setColor("#E6B917")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "#E6B917" }}
						>
							Yellow
						</button>

						<button
							onClick={() => setColor("#7D82B8")}
							className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
							style={{ backgroundColor: "#7D82B8" }}
						>
							Glaucous
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
