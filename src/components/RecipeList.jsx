import RecipeItem from './RecipeItem';
import useDB from '../hooks/db';

export default function RecipeList() {
	const { data, loading, error } = useDB('/recipes');
	if (loading) {
		return <div className="text-center">Loading...</div>;
	}

	if (error) {
		return <div className="text-center">Error: {error.message}</div>;
	}

	return (
		<div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
			{data.map((recipe) => (
				<RecipeItem key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
}
