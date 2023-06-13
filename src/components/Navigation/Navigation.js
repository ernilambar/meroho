import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
						<FontAwesomeIcon
							icon={faHome}
							size={'lg'}
							style={{ color: '#333' }}
						/>
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
						<FontAwesomeIcon
							icon={faEnvelope}
							size={'lg'}
							style={{ color: '#333' }}
						/>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
