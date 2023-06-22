import React from 'react';

import SiteHeader from '../components/SiteHeader/SiteHeader';
import Author from '../components/Author/Author';
import Articles from '../components/Articles/Articles';
import Container from '../containers/Container/Container';
import useDocumentTitle from '../hooks/useDocumentTitle';

const BlogPage = () => {
	useDocumentTitle('Blog - Nilambar Sharma');
	return (
		<div className="blog">
			<Container>
				<SiteHeader />
				<Author />
				<Articles />
			</Container>
		</div>
	);
};

export default BlogPage;
