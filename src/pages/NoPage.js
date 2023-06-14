import React from 'react';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import SiteFooter from '../components/SiteFooter/SiteFooter';
import PageHeader from '../components/PageHeader/PageHeader';
import Container from '../components/Container/Container';

const NoPage = () => {
	return (
		<div className="no-page">
			<SiteHeader />
			<PageHeader title="404 Error!!!" />
			<Container>
				<p>The page you are looking for does not exist.</p>
			</Container>
			<SiteFooter />
		</div>
	);
};

export default NoPage;
