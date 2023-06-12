import React from 'react';

import Container from './../Container/Container';

const PageHeader = (props) => {
	return (
		<div className="page-header">
			<Container>
				<h1>{props.title}</h1>
			</Container>
		</div>
	);
};

export default PageHeader;
