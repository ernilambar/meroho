import SiteHeader from '../components/SiteHeader/SiteHeader';
import SiteFooter from '../components/SiteFooter/SiteFooter';
import Container from '../components/Container/Container';
import PageHeader from '../components/PageHeader/PageHeader';

const Contact = () => {
	return (
		<div className="contact">
			<SiteHeader />
			<PageHeader title="Contact" />
			<Container>
				<p>Contact form will be here.</p>
			</Container>
			<SiteFooter />
		</div>
	);
};

export default Contact;
