import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Recipes from 'pages/Recipes';
import Recipe from 'pages/Recipe';
import AllRecipes from 'pages/Recipes/AllRecipes';
import Materials from 'pages/Materials';
import Material from 'pages/Material';
import Coffees from 'pages/Coffees';
import Coffee from 'pages/Coffee';
import Page from 'pages/templates/Page';
// import Admin from 'pages/Admin';
import CreateNewPods from 'pages/Admin/CreateNewPods';
// import AdminPage from 'pages/templates/AdminPage';

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Page />}>
				<Route path="/" index element={<Home />} />
			</Route>
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
			{/* <Route path="/admin" element={<AdminPage />}>
				<Route path="/admin" index element={<Admin />} />
				<Route path="new-pods" element={<CreateNewPods />} />
			</Route> */}
		</Routes>
	);
}
