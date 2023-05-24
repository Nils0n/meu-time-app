import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>

	)
}

export default App
