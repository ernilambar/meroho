import React from 'react';
import PropTypes from 'prop-types';
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

PageHeader.propTypes = {
	title: PropTypes.string,
};

export default PageHeader;
