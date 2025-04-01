import React from "react";

function Card(props) {
	return (
		<div>
			{/* {props.name} */}

			<input
				type="text"
				onChange={(e) => props.setName(e.target.value)}
			/>

			<p>name variable inside the child component: {props.name}</p>
		</div>
	);
}

export default Card;
