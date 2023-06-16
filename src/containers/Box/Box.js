import React from 'react';
import PropTypes from 'prop-types';
import './Box.scss';

const Box = (props) => {
	const { heading, heading2, children } = props;
	return (
		<div className="box">
			<h2 className="box-heading">
				<span>{heading}</span>
				{heading2}
			</h2>
			<div className="box-content">{children}</div>
		</div>
	);
};

Box.propTypes = {
	heading: PropTypes.string,
	heading2: PropTypes.string,
	children: PropTypes.node,
};

export default Box;
