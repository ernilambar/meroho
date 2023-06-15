import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import './App.scss';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="contact" element={<Contact />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
