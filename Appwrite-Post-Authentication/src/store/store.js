import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Ensure the correct path
// import { Login, logout } from "./authSlice";

const store = configureStore({
	reducer: {
		auth: authReducer, 
        // post: postslice,
	},
});

export default store;
