import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = (props) => {
	return (
		<div className="container">
			<div className="container-inner">{props.children}</div>
		</div>
	);
};

Container.propTypes = {
	children: PropTypes.node,
};

export default Container;
