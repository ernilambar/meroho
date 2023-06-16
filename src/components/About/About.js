import React from 'react';

import Content from '../../containers/Content/Content';
import Box from '../../containers/Box/Box';
import Services from '../Services/Services';

const About = () => {
	return (
		<Content>
			<Box heading="About" heading2="Me">
				<div>
					<p>
						Hello! I am Nilambar Sharma from the beautiful country
						of Nepal. I am a Full Stack Web Developer, WordPress
						enthusiast, Freelancer and blogger. In free time, I like
						to watch movies and listen music.
					</p>
				</div>
			</Box>
			<Box heading="What" heading2="I Do">
				<Services />
			</Box>
		</Content>
	);
};

export default About;
