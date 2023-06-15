import React from 'react';

import SiteHeader from '../components/SiteHeader/SiteHeader';
import Author from '../components/Author/Author';
import Contact from '../components/Contact/Contact';
import Container from '../components/Container/Container';

const ContactPage = () => {
	return (
		<div className="contact">
			<Container>
				<SiteHeader />
				<Author />
				<Contact />
			</Container>
		</div>
	);
};

export default ContactPage;
