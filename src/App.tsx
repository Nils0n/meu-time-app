import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useContext } from "react";
import { ToastContainer } from "react-toastify"

import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import PrivateRoute from "./utils/PrivateRoute";
import { UserContext } from "./contexts/UserContext";

import 'react-toastify/dist/ReactToastify.css';

function App() {
	const { isAuthenticated } = useContext(UserContext);

	return (
		<BrowserRouter>
			<Header />
			<ToastContainer />
			<Routes>

				<Route path="/login" element={<Login />} />

				<Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
					<Route path="/" element={<Home />} />
				</Route>

			</Routes>
		</BrowserRouter>

	)
}

export default App
