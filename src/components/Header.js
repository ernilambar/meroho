import React from 'react';

import Container from './Container';

import Navigation from './Navigation';

const Header = () => {
	return (
		<header className="header">
			<Container>
				<Navigation />
			</Container>
		</header>
	);
};

export default Header;
