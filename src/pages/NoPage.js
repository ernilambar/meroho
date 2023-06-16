import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const NoPage = () => {
	useDocumentTitle('Page not found - Nilambar Sharma');
	return (
		<div className="no-page">
			<div style={{ color: '#ffffff' }}>
				<h1>404 Error!</h1>
				<p>The page you are looking for does not exist.</p>
			</div>
		</div>
	);
};

export default NoPage;
