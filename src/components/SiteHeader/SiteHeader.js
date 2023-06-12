import React from 'react';

import Container from './../Container/Container';

import Navigation from './../Navigation/Navigation';

import './SiteHeader.scss';

const SiteHeader = () => {
	return (
		<header className="site-header">
			<Container>
				<Navigation />
			</Container>
		</header>
	);
};

export default SiteHeader;
