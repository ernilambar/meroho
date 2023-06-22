import React from 'react';
import { Spinno } from 'spinno';
import Content from '../../containers/Content/Content';
import Box from '../../containers/Box/Box';
import { merohoGetDecodedText } from '../../helpers/utils';
import './Articles.scss';

class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.state = { articles: [], loading: true };
	}

	componentDidMount() {
		this.setState({ loading: true });

		fetch('https://nilambar.net/wp-json/wp/v2/posts?per_page=10', {
			method: 'GET',
			credentials: 'same-origin',
		})
			.then((response) => response.json())
			.then((articles) => {
				this.setState({ articles, loading: false });
			});
	}

	render() {
		return (
			<Content>
				<Box heading="Recent" heading2="Articles">
					{this.state.loading && <Spinno color={'#2a65e6'} />}
					<ul className="articles">
						{this.state.articles.length > 0 &&
							this.state.articles.map((item) => (
								<li key={item.id}>
									<a
										href={item.link}
										target="_blank"
										rel="noreferrer"
									>
										{merohoGetDecodedText(
											item.title.rendered
										)}
									</a>
								</li>
							))}
					</ul>
				</Box>
			</Content>
		);
	}
}

export default Articles;
