import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
	return (
		<div id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

			<Header />

			<Register />
			<Login />

			<Footer />


			{/* <a href="#" id="scroll-to-top" className="hvr-radial-out"><i className="fa fa-angle-up"></i></a> */}
		</div>
	);
}

export default App;
