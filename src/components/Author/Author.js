import React from 'react';
import { NavLink } from 'react-router-dom';
import Social from '../Social/Social';
import './Author.scss';
import avatar from './../../images/avatar.jpeg';

const Author = () => {
	return (
		<div className="author">
			<div className="author-content">
				<div className="author-avatar">
					<img src={avatar} alt="author" />
				</div>
				<div>
					<div className="author-details">
						<h2 className="author-name">Nilambar Sharma</h2>
						<h4 className="author-position">Software Developer</h4>
						<Social />
					</div>
				</div>
			</div>
			<div className="author-footer">
				<ul className="author-footer-links">
					<li>
						<NavLink to="/" exact="true">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" exact="true">
							Contact Me
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Author;
