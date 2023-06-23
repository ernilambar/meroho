import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResumeCategoryItem from '../ResumeCategoryItem/ResumeCategoryItem';
import './ResumeCategory.scss';

const ResumeCategory = (props) => {
	const { heading, headingIcon, items } = props;
	return (
		<div className="resume-category">
			<h3 className="resume-category-heading">
				<FontAwesomeIcon
					icon={headingIcon}
					style={{ color: '#2a65e6' }}
				/>
				{heading}
			</h3>

			{items.length > 0 && (
				<div className="resume-category-items">
					{items.map((item) => {
						return <ResumeCategoryItem key={item.id} data={item} />;
					})}
				</div>
			)}
		</div>
	);
};

ResumeCategory.propTypes = {
	heading: PropTypes.string.isRequired,
	headingIcon: PropTypes.object,
	items: PropTypes.array,
};

export default ResumeCategory;
