import CreateNewPodForm from './CreateNewPodForm';
import Container from 'ui/Container';
import { useAll } from 'hooks/useDatabase';

export default function index() {
	const { data, loading, error } = useAll('products');
	console.log(data);
	return (
		<Container className="mb-24">
			<h1>Create New Pods</h1>
			<CreateNewPodForm loading={loading} />
		</Container>
	);
}
