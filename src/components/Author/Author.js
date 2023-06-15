import React from 'react';
import Social from '../Social/Social';
import './Author.scss';
import avatar from './../../images/avatar.png';

const Author = () => {
	return (
		<div className="ns-author">
			<div className="ns-author__content">
				<div className="ns-author__avatar">
					<img src={avatar} alt="author" />
				</div>
				<div className="ns-author__details">
					<h2 className="ns-author__name">Full Name</h2>
					<h4 className="ns-author__position">Software Developer</h4>
					<Social />
				</div>
			</div>
			<div className="ns-author__footer">
				<ul className="ns-author__footer-links">
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
