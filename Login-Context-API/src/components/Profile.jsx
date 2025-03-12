import React from "react";
import UserContext from "../Context/UserContext";
import { div } from "three/tsl";
import { useContext } from "react";

function Profile() {
	// Data Received

	const { user } = useContext(UserContext);

	if (!user) return <div>Please Login</div>;
	return <div>Welcome {user.username} to our web </div>;
}

export default Profile;
