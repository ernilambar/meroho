import React from 'react';

import SiteHeader from '../components/SiteHeader/SiteHeader';
import Author from '../components/Author/Author';
import Resume from '../components/Resume/Resume';
import Container from '../containers/Container/Container';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ResumePage = () => {
	useDocumentTitle('Resume - Nilambar Sharma');
	return (
		<div className="resume">
			<Container>
				<SiteHeader />
				<Author />
				<Resume />
			</Container>
		</div>
	);
};

export default ResumePage;
