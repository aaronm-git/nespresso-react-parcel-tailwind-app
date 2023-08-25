import CreateNewPodForm from './CreateNewPodForm';
import Container from 'ui/Container';
export default function index() {
	return (
		<Container className="mb-24">
			<h1>Create New Pods</h1>
			<CreateNewPodForm />
		</Container>
	);
}
