import { data as recipes } from '../data/recipes.json';
import RecipeItem from './RecipeItem';

export default function RecipeList() {
	return (
		<div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3">
			{recipes.map((recipe) => (
				<RecipeItem key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
}
