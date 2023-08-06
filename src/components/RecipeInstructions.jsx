import FeatherIcon from './ui/FeatherIcon';
import Tag from './ui/Tag';

export default function RecipeInstructions({ recipe }) {
	console.log(recipe);
	return (
		<div>
			<h1 className="hidden text-4xl font-light md:block">{recipe.name}</h1>

			<div className="my-4 grid grid-cols-2 gap-1 md:grid-cols-3">
				<div className="flex items-center" title="Prep time">
					<FeatherIcon icon="clock" className="mr-1 stroke-1 text-nespresso-gold" />
					{recipe.prepTime}
				</div>
				<div className="flex items-center" title="Difficulty">
					<FeatherIcon icon="target" className="mr-1 stroke-1 text-nespresso-gold" />
					{recipe.difficulty}
				</div>
			</div>

			<hr className="my-3" />

			<section className="mb-8">
				<p>{recipe.description}</p>
			</section>
			<Section title="RECIPE DETAILS">
				<div className="flex flex-wrap gap-2">
					{recipe.tags?.map((tag) => (
						<Tag key={tag} text={tag} />
					))}
				</div>
			</Section>
			<Section title="INGREDIENTS">
				<ul>
					{recipe.ingredients?.map((ingredient) => (
						<li key={ingredient} className="my-3">
							<span>{ingredient}</span>
						</li>
					))}
				</ul>
			</Section>
			<Section title="MATERIALS">
				<ul>
					{recipe.materials?.map((material) => (
						<li key={material.id} className="my-3">
							<a href={`/products/${material.id}`}>{material.name}</a>
						</li>
					))}
				</ul>
			</Section>
			<Section title="INSTRUCTIONS">
				<ol className="list-inside list-decimal">
					{recipe.instructions?.map((instruction) => (
						<li key={instruction} className="my-3">
							<span>{instruction}</span>
						</li>
					))}
				</ol>
			</Section>
		</div>
	);
}

function Section({ title, children }) {
	return (
		<section className="my-12">
			<h3 className="mb-3 text-xl font-light tracking-[8px]">{title}</h3>
			{children}
		</section>
	);
}
