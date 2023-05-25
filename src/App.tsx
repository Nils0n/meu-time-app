import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<ToastContainer />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>

	)
}

export default App
