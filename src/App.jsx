import React from 'react';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/templates/Recipe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

export function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipes" element={<Recipes />} />
				<Route path="/recipes/:id" element={<Recipe />} />
			</Routes>
			<Footer />
		</>
	);
}
