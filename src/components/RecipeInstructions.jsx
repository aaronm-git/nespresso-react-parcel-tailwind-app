import { useContext } from 'react';
import ImagesContext from '../context/imagePathsContext';
import FeatherIcon from './ui/FeatherIcon';
import Tag from './ui/Tag';
export default function RecipeInstructions({ recipe }) {
	console.log(recipe);
	const images = useContext(ImagesContext);
	console.log(images);
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
					{recipe.coffees?.map((coffee) => {
						const imgSrc = coffee.images.length && images[coffee.images[0]];
						return (
							<SpecialListItem key={coffee.name} imgSrc={imgSrc}>
								<span className="underline">{coffee.name}</span>
								<span className="block font-light text-black">{coffee.description}</span>
							</SpecialListItem>
						);
					})}
				</ul>
				<ul className="ml-5 mt-4 list-disc">
					{recipe.ingredients?.map((ingredient) => (
						<li key={ingredient} className="my-3">
							<span>{ingredient}</span>
						</li>
					))}
				</ul>
			</Section>
			<Section title="MATERIALS">
				<ul>
					{recipe.materials?.map((material) => {
						const imgSrc = material.images.length && images[material.images[0]];
						return (
							<SpecialListItem key={material.name} imgSrc={imgSrc}>
								<span className="flex h-full items-center">{material.name}</span>
							</SpecialListItem>
						);
					})}
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

function SpecialListItem({ imgSrc, item, children }) {
	return (
		<li className="mb-2 rounded bg-gray-100 p-1">
			<div className="flex flex-nowrap items-center p-2">
				<a href="#" className="relative flex grow no-underline">
					{imgSrc && (
						<div className="mr-3 h-[50px] w-[50px]">
							<img src={imgSrc} className="h-full w-full object-cover" />
						</div>
					)}
					<div>{children}</div>
				</a>
				<div>
					<button className="rounded-full bg-nespresso-gold text-right" type="button">
						<FeatherIcon icon="plus" className="stroke-1 text-white" />
					</button>
				</div>
			</div>
		</li>
	);
}
