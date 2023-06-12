import Container from '../components/Container/Container';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import SiteFooter from '../components/SiteFooter/SiteFooter';
import Author from '../components/Author/Author';

const Home = () => {
	return (
		<div className="home">
			<SiteHeader />
			<Container>
				<Author />
			</Container>
			<SiteFooter />
		</div>
	);
};

export default Home;
