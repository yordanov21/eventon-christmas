import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Header from "./components/Header";
import Home from './components/Home';
import Deals from './components/Deals';
import Donate from './components/Donate';
import Create from './components/ChristmasCardList/Create';
import Edit from './components/ChristmasCardList/Edit';
import Details from './components/Details';
import Participants from './components/Participants';
import Contact from './components/Contact';
import Login from "./components/Login";
import Logout from './components/Logout';
import Register from "./components/Register";
import Footer from "./components/Footer";
import ErrorBoundary from './components/Common/ErrorBoundary';
// bootstrap css 
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<ErrorBoundary>
			<AuthProvider>
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
						<Route path="/edit/:cardId" element={<Edit />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/details/:cardId" element={<Details />} />

					</Routes>
					<Footer />
				</main>
			</AuthProvider>
		</ErrorBoundary>

	);
}

export default App;
