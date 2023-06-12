import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const NoPage = () => {
	return (
		<div className="no-page">
			<Container>
				<Header />
				<PageHeader title="404 Error!!!" />
				<Footer />
			</Container>
		</div>
	);
};

export default NoPage;
