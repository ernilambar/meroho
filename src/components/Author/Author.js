import React from 'react';

import Container from './../Container/Container';
import Social from '../Social/Social';

import './Author.scss';

import avatar from './../../images/avatar.png';

const Author = () => {
	return (
		<div className="author">
			<Container>
				<div className="branding">
					<img src={avatar} className="App-avatar" alt="avatar" />
					<h1>Nilambar Sharma</h1>
					<p>Since 1985</p>
				</div>
				<div className="bio">
					<div className="bio-inner">
						<p>
							Hello! I am Nilambar Sharma from the beautiful
							country of Nepal. I am a Full Stack Web Developer,
							WordPress enthusiast, Freelancer and blogger. In
							free time, I like to watch movies and listen music.
						</p>
				<Social />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Author;
