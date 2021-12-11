import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authService';
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

import { isAuthenticated } from './services/authService';

function App() {
	const [userInfo, setUserInfo] = useState({ isAuthenticated: false, user: '' });

	useEffect(() => {
		let user = authService.getUser();

		setUserInfo({
			isAuthenticated: Boolean(user),
			user: user,
		})

	}, []);

	const onLogin = (email) => {
		setUserInfo({
			isAuthenticated: true,
			user: email,
		})

	};

	const onLogout = () => {
		setUserInfo({
			isAuthenticated: false,
			user: null
		})
	};

	return (
		<main id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">
			<Header {...userInfo} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login onLogin={onLogin} />} />
				<Route path="/logout" element={<Logout onLogout={onLogout} />} />
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
	);
}

export default App;
