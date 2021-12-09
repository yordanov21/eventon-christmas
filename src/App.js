import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from './components/Home';
import Deals from './components/Deals';
import Donate from './components/Donate';
import Participants from './components/Participants';
import Contact from './components/Contact';
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
	return (
		<main id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/Deals" element={<Deals />} />
				<Route path="/Donate" element={<Donate />} />
				<Route path="/testimonial" element={<Participants />} />
				<Route path="/contact" element={<Contact />} />

			</Routes>
			<Footer />

		</main>
	);
}

export default App;
