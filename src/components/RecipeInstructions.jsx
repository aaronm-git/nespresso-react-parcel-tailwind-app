export default function RecipeInstructions({ recipe }) {
	return (
		<div>
			<h1 className="hidden text-4xl font-light md:block">{recipe.name}</h1>
			<div className="my-4">
				<p>{recipe.description}</p>
			</div>
		</div>
	);
}
