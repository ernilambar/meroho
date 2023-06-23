import React from 'react';
import Content from '../../containers/Content/Content';
import Box from '../../containers/Box/Box';
import ResumeCategory from '../ResumeCategory/ResumeCategory';
import { faBriefcase, faBank } from '@fortawesome/free-solid-svg-icons';
import './Resume.scss';

const experienceItems = [
	{
		id: '1',
		title: 'Co-founder/CTO',
		company: 'Akala Web Studio',
		description: 'Execute full lifecycle software development',
		duration: 'Nov 2019 - Present',
		active: true,
	},
	{
		id: '2',
		title: 'Co-founder/CEO',
		company: 'WEN Themes',
		description: 'WordPress themes and plugins development',
		duration: 'Dec 2015 - Oct 2019',
		active: false,
	},
	{
		id: '3',
		title: 'Sr WordPress Developer',
		company: 'Web Experts Nepal',
		description: 'Web solutions based on WordPress',
		duration: 'Sep 2013 - Nov 2015',
		active: false,
	},
	{
		id: '4',
		title: 'Sr Software Engineer',
		company: 'Surfmandu Pvt Ltd',
		description: 'Worked in CodeIgniter and Laravel',
		duration: 'Apr 2012 - Aug 2013',
		active: false,
	},
	{
		id: '5',
		title: 'Assistant Team Leader',
		company: 'F1Soft International',
		description: 'PHP based Content Management System',
		duration: 'Jul 2010 - Dec 2011',
		active: false,
	},
];

const educationItems = [
	{
		id: '1',
		title: 'Apex College',
		company: 'Kathmandu',
		description:
			'Master in Business Administration (Finance Specialization)',
		duration: '2010-2012',
		active: false,
	},
	{
		id: '2',
		title: 'Kantipur Engineering College',
		company: 'Lalitpur',
		description: 'Bachelor in Electronics and Communication',
		duration: '2004 - 2008',
		active: false,
	},
	{
		id: '3',
		title: 'Nobel Academy',
		company: 'Kathmandu',
		description: 'Higher Secondary Education Level',
		duration: '2001 - 2003',
		active: false,
	},
	{
		id: '4',
		title: 'Jyugal Boarding High School',
		company: 'Sindhupalchok',
		description: 'School Leaving Certificate',
		duration: '1990 - 2000',
		active: false,
	},
];

const Resume = () => {
	return (
		<Content>
			<Box heading="My" heading2="Resume">
				<div className="resume-row">
					<div className="resume-column">
						<ResumeCategory
							heading="Experience"
							headingIcon={faBriefcase}
							items={experienceItems}
						/>
					</div>
					<div className="resume-column">
						<ResumeCategory
							heading="Education"
							headingIcon={faBank}
							items={educationItems}
						/>
					</div>
				</div>
			</Box>
		</Content>
	);
};

export default Resume;
