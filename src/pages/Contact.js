import SiteHeader from '../components/SiteHeader/SiteHeader';
import SiteFooter from '../components/SiteFooter/SiteFooter';
import Container from '../components/Container/Container';
import PageHeader from '../components/PageHeader/PageHeader';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
	return (
		<div className="contact">
			<SiteHeader />
			<PageHeader title="Contact" />
			<Container>
				<ContactForm />
			</Container>
			<SiteFooter />
		</div>
	);
};

export default Contact;
