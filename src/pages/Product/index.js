import { useParams } from 'react-router-dom';
import useDB from 'hooks/useDB';

export default function Product() {
	const { id } = useParams();
	const { data, loading, error } = useDB(`products/${id}`);
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;

	return <div>Product: {id}</div>;
}
