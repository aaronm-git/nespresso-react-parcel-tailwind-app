import recipes from '../data/recipes.json';
import coffees from '../data/coffees.json';
import products from '../data/products.json';

import { useEffect, useState } from 'react';

function useDB(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// NOTE: This is a fake DB hook. It's just a setTimeout that simulates a DB call.
	useEffect(() => {
		setLoading(true);
		setError(null);

		async function mockFetch() {
			const response = await handleRequest(url);
			if (response === null) {
				setError(new Error('404'));
				setLoading(false);
			} else {
				setData(response.data);
				setLoading(false);
			}
		}

		mockFetch();
	}, []);

	return { data, loading, error };
}

async function handleRequest(url) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 10);
	}).then(() => {
		const [_, resource, id] = url.split('/');
		let response = null;
		if (resource === 'recipes') {
			if (id === undefined) {
				response = { data: recipes };
			} else {
				response = { data: recipes.find((recipe) => recipe.id === id) };
				response.data.materials = response?.data.materials.map((materialId) => {
					return products.find((product) => product.id === materialId);
				});
				response.data.coffees = response?.data.coffees.map((coffeeId) => {
					return coffees.find((coffee) => coffee.id === coffeeId);
				});
			}
		}

		if (resource === 'coffees') {
			if (id === undefined) {
				response = { data: coffees };
			} else response = { data: coffees.find((coffee) => coffee.id === id) };
		}

		if (resource === 'products') {
			if (id === undefined) {
				response = { data: products };
			} else {
				response = { data: products.find((product) => product.id === id) };
			}
		}

		return response;
	});
}

export default useDB;
