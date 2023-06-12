import Branding from './../components/Branding';
import Bio from './../components/Bio';
import Social from './../components/Social';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div className="home">
			<Container>
				<Header />
				<Branding />
				<Bio />
				<Social />
				<Footer />
			</Container>
		</div>
	);
};

export default Home;
