import React from 'react';
import Home from 'pages/Home';
import Recipes from 'pages/Recipes';
import Recipe from 'pages/Recipe';
import AllRecipes from 'pages/Recipes/AllRecipes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Materials from 'pages/Materials';
import Material from 'pages/Material';
import Coffees from 'pages/Coffees';
import Coffee from 'pages/Coffee';
import Page from './pages/templates/Page';
export function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipes" element={<Page />}>
					<Route path="/recipes" index element={<Recipes />} />
					<Route path=":id" element={<Recipe />} />
				</Route>
				<Route path="/products" element={<Page />}>
					<Route path="/products" index element={<Materials />} />
					<Route path=":id" element={<Material />} />
				</Route>
				<Route path="/coffees" element={<Page />}>
					<Route path="/coffees" index element={<Coffees />} />
					<Route path=":id" element={<Coffee />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}
