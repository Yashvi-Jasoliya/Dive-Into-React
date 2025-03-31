import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm();

	const delay = (d) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, d * 1000);
		});
	};

	const onSubmit = async (data) => {
		await delay(2) // simulating network delay
        console.log(data)
		let r = await fetch("http://localhost:3000/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		let res = await r.text();
		console.log(data, res);
		// if(data.username !== "shubham"){
		//   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
		// }
		// if(data.username === "rohan"){
		//   setError("blocked", {message: "Sorry this user is blocked"})
		// }
	};

	return (
		<>
			{isSubmitting && <div>Loading...</div>}
			<br />
			<div className="container text-red">
				<form action="" onSubmit={handleSubmit(onSubmit)}>
					<input
						className="border-[white] p-3"
						placeholder="username"
						{...register("username", {
							required: {
								value: true,
								message: "This field is required",
							},
							minLength: { value: 3, message: "Min length is 3" },
							maxLength: { value: 8, message: "Max length is 8" },
						})}
						type="text"
					/>
					{errors.username && (
						<div className="red">{errors.username.message}</div>
					)}
					<br />
					<br />
					<input
						className="
						border-[white]
						p-3"
						placeholder="password"
						{...register("password", {
							minLength: {
								value: 7,
								message: "Min length of password is 7",
							},
						})}
						type="password"
					/>
					{errors.password && (
						<div className="red">{errors.password.message}</div>
					)}
					<br />
					<input
						className="bg-blue-300 px-3 mt-3 border-2 border-[white]"
						disabled={isSubmitting}
						type="submit"
						value="Submit"
					/>
					{errors.myform && (
						<div className="red">{errors.myform.message}</div>
					)}
					{errors.blocked && (
						<div className="red">{errors.blocked.message}</div>
					)}
				</form>
			</div>
		</>
	);
}

export default App;
