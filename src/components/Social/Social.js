import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faFacebookSquare,
	faTwitterSquare,
	faLinkedin,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

import './Social.scss';

const Social = () => {
	const links = [
		{
			link: 'https://www.nilambar.net',
			icon: faSquareUpRight,
			color: '#333',
		},
		{
			link: 'https://twitter.com/nilambar',
			icon: faTwitterSquare,
			color: '#00aced',
		},
		{
			link: 'https://www.facebook.com/nilambar.sharma',
			icon: faFacebookSquare,
			color: '#3b5998',
		},
		{
			link: 'https://www.linkedin.com/in/nilambar/',
			icon: faLinkedin,
			color: '#0077b5',
		},
		{
			link: 'https://www.instagram.com/ernilambar/',
			icon: faInstagram,
			color: '#C13584',
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
									size="2x"
									style={{ color: item.color }}
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
