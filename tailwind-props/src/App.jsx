import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import "./index.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, Button } from "react-bootstrap";
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "Yashvi",
    age: 20
  }

  return (
		<>
			<h1 className="bg-green-400 text-black p-4 rounded-xl">
				{" "}
				Hello Tailwind
			</h1>

			{/* <Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card> */}

			<Card username="Yashvi" btnText="Visit More" someobj={myobj} />
			<Card username="Yashvi Jasoliya" btnText='Learn More' />
		</>
  );
}

export default App
