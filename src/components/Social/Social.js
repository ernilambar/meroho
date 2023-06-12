import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Social.scss';

const Social = () => {
	return (
		<div className="social">
			<ul>
				<li>
					<a
						href="https://www.nilambar.net/"
						target="_blank"
						without="true"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon="fa-globe"
							style={{ color: '#ddd' }}
						/>
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/nilambar"
						target="_blank"
						without="true"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon="fab fa-twitter"
							style={{ color: '#ddd' }}
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/nilambar.sharma"
						target="_blank"
						without="true"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon="fab fa-facebook"
							style={{ color: '#ddd' }}
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/nilambar/"
						target="_blank"
						without="true"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon="fab fa-linkedin"
							style={{ color: '#ddd' }}
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/ernilambar/"
						target="_blank"
						without="true"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon="fab fa-instagram"
							style={{ color: '#ddd' }}
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Social;
