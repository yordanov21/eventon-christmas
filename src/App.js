import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

import Header from "./components/Header";
import Home from './components/Home';
import MyCards from './components/MyCards';
import MyGifts from './components/MyGifts';
import Donate from './components/Donate';
import DonateGift from './components/DonateGift';
import Create from './components/ChristmasCardList/Create';
import CreateGift from './components/ChristmasGiftList/Create';
import Edit from './components/ChristmasCardList/Edit';
import EditGift from './components/ChristmasGiftList/Edit';
import Details from './components/Details';
import DetailsGift from './components/DetailsGift';
import Contact from './components/Contact';
import Login from "./components/Login";
import Logout from './components/Logout';
import Register from "./components/Register";
import Notification from './components/Common/Notification';
import Footer from "./components/Footer";
import ErrorBoundary from './components/Common/ErrorBoundary';
import PrivateRoute from './components/Common/PrivateRoute';
// bootstrap css 
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<ErrorBoundary>
			<AuthProvider>
				<NotificationProvider>
					<main id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">
						<Header />
						<Notification />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/donate/*" element={<Donate />} />
							<Route path="/donate-gift/*" element={<DonateGift />} />
							<Route path="/contact" element={<Contact />} />

							<Route path="/my-cards" element={<PrivateRoute><MyCards /></PrivateRoute>} />
							<Route path="/my-gifts" element={<PrivateRoute><MyGifts /></PrivateRoute>} />
							<Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
							<Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
							<Route path="/create-gift" element={<PrivateRoute><CreateGift /></PrivateRoute>} />
							<Route path="/details/:cardId" element={<PrivateRoute><Details /></PrivateRoute>} />
							<Route path="/details-gift/:giftId" element={<PrivateRoute><DetailsGift /></PrivateRoute>} />
							<Route path="/edit/:cardId" element={<PrivateRoute><Edit /></PrivateRoute>} />
							<Route path="/edit-gift/:giftId" element={<PrivateRoute><EditGift /></PrivateRoute>} />



						</Routes>
						<Footer />
					</main>
				</NotificationProvider>
			</AuthProvider>
		</ErrorBoundary>

	);
}

export default App;
