import React from 'react';

import SiteHeader from '../components/SiteHeader/SiteHeader';
import Author from '../components/Author/Author';
import About from '../components/About/About';
import Container from './../components/Container/Container';
import useDocumentTitle from '../components/DocumentTitle/useDocumentTitle';

const HomePage = () => {
	useDocumentTitle('Nilambar Sharma');
	return (
		<div className="home">
			<Container>
				<SiteHeader />
				<Author />
				<About />
			</Container>
		</div>
	);
};

export default HomePage;
