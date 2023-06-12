import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faLinkedin,
	faInstagram,
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
			link: 'https://www.facebook.com/nilambar.sharma',
			icon: faFacebook,
		},
		{
			link: 'https://www.linkedin.com/in/nilambar/',
			icon: faLinkedin,
		},
		{
			link: 'https://www.instagram.com/ernilambar/',
			icon: faInstagram,
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
									style={{ color: '#ddd' }}
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
