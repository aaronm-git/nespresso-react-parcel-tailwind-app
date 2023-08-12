import React from 'react';
import Home from 'pages/Home';
import Recipes from 'pages/Recipes';
import Recipe from 'pages/Recipe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Products from 'pages/Products';
import Product from 'pages/Product';

export function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipes" element={<Recipes />}>
					<Route path=":id" element={<Recipe />} />
				</Route>
				<Route path="/products" element={<Products />}>
					<Route path=":id" element={<Product />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}
