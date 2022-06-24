import Arrived from "./components/arrived/Arrived";
import Browse from "./components/browse/Browse";
import Customer from "./components/customers/Customer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SideMenu from "./components/sideMenu/SideMenu";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Browse />
			<Arrived />
			<Customer />
			<SideMenu />
			<Footer />
		</>
	);
}

export default App;
