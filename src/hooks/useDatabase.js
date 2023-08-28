import { useState, useEffect } from 'react';
import supabaseClient from 'utils/supabase';

/**
 * @param {string} tableName
 * @param {object} filter
 * @returns {Promise<*>}
 * @example
 * const { data, loading, error } = useFilter('users', { id: 1 });
 */

export function useAll(tableName, select = null) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);

		async function dataFetch() {
			const { data, error } = await supabaseClient.from(tableName).select(select);
			if (error) {
				setError(error);
				setLoading(false);
			} else {
				setData(data);
				setLoading(false);
			}
		}

		dataFetch();

		return () => {
			setData(null);
			setLoading(true);
			setError(null);
		};
	}, []);

	return { data, loading, error };
}
