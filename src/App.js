import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from "./components/Header";
import Home from './components/Home';
import Deals from './components/Deals';
import Donate from './components/Donate';
import Create from './components/ChristmasCardList/Create';
import Details from './components/Details';
import Participants from './components/Participants';
import Contact from './components/Contact';
import Login from "./components/Login";
import Logout from './components/Logout';
import Register from "./components/Register";
import Footer from "./components/Footer";

const initialAuthState = {
	_id: "",
	email: "",
	accessToken: "",
}

function App() {
	const [user, setUser] = useLocalStorage('user', initialAuthState);

	const login = (authData) => {
		setUser(authData);
	};

	const logout = () => {
		setUser(initialAuthState);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			<main id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/register" element={<Register />} />
					<Route path="/deals" element={<Deals />} />
					<Route path="/donate/*" element={<Donate />} />
					<Route path="/create" element={<Create />} />
					<Route path="/testimonial" element={<Participants />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/details/:cardId" element={<Details />} />

				</Routes>
				<Footer />

			</main>
		</AuthContext.Provider>
	);
}

export default App;
