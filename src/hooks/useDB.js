import { useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';
// fake data
import recipes from 'data/recipes.json';
import coffees from 'data/coffees.json';
import products from 'data/products.json';

/**
 * @param {string} url
 * @returns {{data: any, loading: boolean, error: Error}}
 * @example
 * const {data, loading, error} = useDB('products/1');
 * if (loading) return <div>Loading...</div>;
 * if (error) return <div>Something went wrong</div>;
 * return <div>{data.name}</div>;
 */

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

		// NOTE: This is a cleanup function. It's called when the component is unmounted. It's used to reset the state for the next time the component is mounted. This is important because the state is shared between all instances of the component.
		return () => {
			setData(null);
			setLoading(true);
			setError(null);
		};
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
				response = { data: cloneDeep(recipes) };
			} else {
				response = { data: cloneDeep(recipes).find((recipe) => recipe.id === id) };
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
				response = { data: cloneDeep(coffees) };
			} else response = { data: coffees.find((coffee) => coffee.id === id) };
		}

		if (resource === 'materials') {
			if (id === undefined) {
				response = { data: cloneDeep(products) };
			} else {
				response = { data: products.find((product) => product.id === id) };
			}
		}

		return response;
	});
}

export default useDB;
