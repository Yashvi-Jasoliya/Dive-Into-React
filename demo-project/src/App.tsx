import "./App.css";
import Todos from "./components/Todos.tsx";

function App() {
	return (
		<>
			<Todos items={["Learn React", "Learn Ts", "Learn Js"]} />
		</>
	);
}

export default App;
