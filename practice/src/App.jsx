import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home"
import PostData from "./components/post";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Router>
				<nav>
					<Link to="/">Home</Link> | <Link to="/post">Post Data</Link>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post" element={<PostData />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
