import SiteHeader from '../components/SiteHeader/SiteHeader';
import SiteFooter from '../components/SiteFooter/SiteFooter';
import Author from '../components/Author/Author';

const Home = () => {
	return (
		<div className="home">
			<SiteHeader />
			<Author />
			<SiteFooter />
		</div>
	);
};

export default Home;
