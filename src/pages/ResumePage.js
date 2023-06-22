import React from 'react';

import SiteHeader from '../components/SiteHeader/SiteHeader';
import Author from '../components/Author/Author';
import Articles from '../components/Articles/Articles';
import Container from '../containers/Container/Container';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ResumePage = () => {
	useDocumentTitle('Resume - Nilambar Sharma');
	return (
		<div className="resume">
			<Container>
				<SiteHeader />
				<Author />
				<Articles />
			</Container>
		</div>
	);
};

export default ResumePage;
