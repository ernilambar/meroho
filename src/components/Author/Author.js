import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import Social from '../Social/Social';
import './Author.scss';
import avatar from './../../images/avatar.jpeg';

const Author = () => {
	const typerElement = React.useRef(null);

	useEffect(() => {
		const typed = new Typed(typerElement.current, {
			strings: ['Software Developer', 'Freelancer', 'Blogger'],
			typeSpeed: 80,
			showCursor: false,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div className="author">
			<div className="author-content">
				<div className="author-avatar">
					<img src={avatar} alt="author" />
				</div>
			</div>
			<div>
				<div className="author-details">
					<h2 className="author-name">Nilambar Sharma</h2>
					<div className="author-tagline">
						<span className="author-position" ref={typerElement} />
					</div>
					<Social />
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
