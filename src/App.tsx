import { useState, useEffect } from "react";
import About from "~/components/About/About";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import Intro from "~/components/Intro/Intro";
import Experience from "~/components/Experience/Experience";
import Projects from "~/components/Projects/Projects";
import Contact from "~/components/Contact/Contact";
import AppAnimation from "~/components/Animation/AppAnimation";

const App = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<>
			{loading ? (
				<AppAnimation />
			) : (
				<>
					<Header />
					<Intro />
					<About />
					<Experience />
					<Projects />
					<Contact />
					<Footer />
				</>
			)}
		</>
	);
};

export default App;
