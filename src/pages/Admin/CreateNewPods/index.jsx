import CreateNewPodForm from './CreateNewPodForm';
import Container from 'ui/Container';
import { useAll } from 'hooks/useDatabase';

export default function index() {
	const { data: products, loading: loadingProducts, error: errorProducts } = useAll('products');
	const { data: categories, loading: loadingCategories, error: errorCategories } = useAll('pod_categories');
	const { data: servingSizes, loading: loadingServingSizes, error: errorServingSizes } = useAll('pod_serving_sizes');

	const loading = loadingProducts && loadingCategories && loadingServingSizes;
	const error = !!errorProducts && !!errorCategories && !!errorServingSizes;

	if (error) return <p>{error.message}</p>;

	const formData = {
		products,
		categories,
		servingSizes,
	};

	return (
		<Container className="mb-24">
			<h1>Create New Pods</h1>
			<CreateNewPodForm data={formData} loading={loading} />
		</Container>
	);
}
