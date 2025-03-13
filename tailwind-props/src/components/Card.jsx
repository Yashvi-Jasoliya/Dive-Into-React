import React from 'react'
import { color } from 'three/tsl';

function Card({username, btnText = "Click Me"}) {
     console.log(username);
  return (
   
		<div className="max-w-xs p-6 rounded-md shadow-md bg-black">
			<img
				src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
				alt=""
				className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
			/>
			<div className="mt-6 mb-2" style={{color:"white"}}>
				<h2 className="text-xl font-bold tracking-wide">
					{username}
				</h2>
			</div>
			<p className="text-gray-300">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Distinctio tempora ipsum soluta amet
			</p>

			<button
				type="button"
				className="flex items-center justify-center p-2 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
			>
				{btnText}
			</button>
		</div>
  );
}

export default Card
