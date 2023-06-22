import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faEnvelope,
	faPenClip,
	faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';

const navItems = [
	{
		title: 'home',
		to: '/',
		icon: faHome,
	},
	{
		title: 'resume',
		to: '/resume',
		icon: faFileLines,
	},
	{
		title: 'blog',
		to: '/blog',
		icon: faPenClip,
	},
	{
		title: 'contact',
		to: '/contact',
		icon: faEnvelope,
	},
];

const Navigation = () => {
	return (
		<nav className="navigation">
			<ul>
				{navItems.map((item) => {
					return (
						<li key={item.title}>
							<NavLink
								to={item.to}
								exact="true"
								className={(navData) =>
									navData.isActive ? 'active' : ''
								}
							>
								<FontAwesomeIcon icon={item.icon} size={'lg'} />
								<span>{item.title}</span>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navigation;
