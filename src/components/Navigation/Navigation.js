import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faEnvelope,
	faPenClip,
} from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';

const Navigation = () => {
	return (
		<nav className="navigation">
			<ul>
				<li>
					<NavLink
						to="/"
						exact="true"
						className={(navData) =>
							navData.isActive ? 'active' : ''
						}
					>
						<FontAwesomeIcon icon={faHome} size={'lg'} />
						<span>home</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/blog"
						exact="true"
						className={(navData) =>
							navData.isActive ? 'active' : ''
						}
					>
						<FontAwesomeIcon icon={faPenClip} size={'lg'} />
						<span>blog</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contact"
						exact="true"
						className={(navData) =>
							navData.isActive ? 'active' : ''
						}
					>
						<FontAwesomeIcon icon={faEnvelope} size={'lg'} />
						<span>contact</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
