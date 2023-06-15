import React from 'react';
import Container from '../components/Container/Container';

const NoPage = () => {
	return (
		<div className="no-page">
			<Container>
				<div style={{ width: '400px', color: '#ffffff' }}>
					<p>The page you are looking for does not exist.</p>
				</div>
			</Container>
		</div>
	);
};

export default NoPage;
