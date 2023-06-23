import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Social.scss';

const Social = () => {
	const links = [
		{
			link: 'https://www.nilambar.net',
			icon: faGlobe,
		},
		{
			link: 'https://twitter.com/nilambar',
			icon: faTwitter,
		},
		{
			link: 'https://github.com/ernilambar',
			icon: faGithub,
		},
		{
			link: 'https://www.linkedin.com/in/nilambar/',
			icon: faLinkedin,
		},
		{
			link: 'https://stackoverflow.com/users/554694/nilambar-sharma',
			icon: faStackOverflow,
		},
	];

	return (
		<div className="social">
			<ul>
				{links.map((item) => {
					return (
						<li key={item.link}>
							<a
								href={item.link}
								target="_blank"
								without="true"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={item.icon}
									size="lg"
									style={{ color: '#434343' }}
								/>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Social;
