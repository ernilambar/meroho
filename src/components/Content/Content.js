import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

const Content = (props) => {
	return (
		<div className="content">
			<div className="content-wrap">{props.children}</div>
		</div>
	);
};

Content.propTypes = {
	children: PropTypes.node,
};

export default Content;
