import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ResumeCategoryItem.scss';

const ResumeCategoryItem = (props) => {
	const { data } = props;
	return (
		<div className="resume-category-item">
			<div
				className={classnames('resume-category-item-duration', {
					active: data.active,
				})}
			>
				{data.duration}
			</div>
			<div className="resume-category-item-title">{data.title}</div>
			<div className="resume-category-item-company">{data.company}</div>
			{data.description && (
				<div className="resume-category-item-description">
					<p>{data.description}</p>
				</div>
			)}
		</div>
	);
};

ResumeCategoryItem.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ResumeCategoryItem;
