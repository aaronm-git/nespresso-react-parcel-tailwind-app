import RecipeItem from './RecipeItem';
import useDB from 'hooks/useDB';

export default function RecipeList() {
	const { data, loading, error } = useDB('/recipes');

	if (loading) {
		return (
			<ListWrapper className="relative overflow-hidden after:absolute after:inset-0 after:bottom-0 after:left-0 after:h-full after:bg-gradient-to-t after:from-white">
				{new Array(6).fill(0).map((_, i) => (
					<RecipeItem key={i} loading />
				))}
			</ListWrapper>
		);
	}

	if (error) {
		return <div className="text-center">Error: {error.message}</div>;
	}

	return (
		<ListWrapper>
			{data?.map((recipe) => (
				<RecipeItem key={recipe.id} recipe={recipe} />
			))}
		</ListWrapper>
	);
}

function ListWrapper({ children, className }) {
	return <div className={`grid gap-2 md:grid-cols-2 lg:grid-cols-3 ${className || ''}`}>{children}</div>;
}
