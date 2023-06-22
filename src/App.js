import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NoPage from './pages/NoPage';
import './App.scss';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<HomePage />} />
						<Route path="blog" element={<BlogPage />} />
						<Route path="contact" element={<ContactPage />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
