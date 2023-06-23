import React from 'react';

import Content from '../../containers/Content/Content';
import Box from '../../containers/Box/Box';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
	return (
		<Content>
			<Box heading="Contact" heading2="Me">
				<ContactForm />
			</Box>
		</Content>
	);
};

export default Contact;
