import { useEffect, useState } from "react";
import axios from "axios";

function PostData() {
	const [posts, setPosts] = useState([]); // Stores the fetched posts
	const [loading, setLoading] = useState(true); // Tracks loading state

	useEffect(() => {
		// Fetch data when the component loads
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				setPosts(response.data); // Store fetched posts in state
				setLoading(false); // Set loading to false once data is received
			})
			.catch((error) => {
				console.error("Error fetching posts:", error);
				setLoading(false); // Stop loading even if there’s an error
			});
	}, []); 
	

	return (
		<div>
			<h1>All Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default PostData;
