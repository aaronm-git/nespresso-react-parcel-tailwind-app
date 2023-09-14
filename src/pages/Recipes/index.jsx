import Container from 'ui/Container';
import RecipeList from 'components/RecipeList';

export default function index() {
	return (
		<Container>
			<div className="mt-8">
				<RecipeList />
			</div>
		</Container>
	);
}
