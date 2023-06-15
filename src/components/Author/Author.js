import React from 'react';
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
						<a href="https://asdf.com">download cv</a>
					</li>
					<li>
						<a href="https://asdf.com">contact me</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Author;
