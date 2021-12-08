import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

			<Header />

			<Footer />


			{/* <a href="#" id="scroll-to-top" className="hvr-radial-out"><i className="fa fa-angle-up"></i></a> */}
		</div>
	);
}

export default App;
