import { useContext } from 'react';
import ImagesContext from '../context/imagePathsContext';
import Card from './ui/Card';
import FeatherIcon from './ui/FeatherIcon';

export default function RecipeItem({ recipe, loading }) {
	const images = useContext(ImagesContext);

	if (loading) {
		return (
			<Card loading>
				<Card.Image className="h-[240px]" />
				<Card.Body>
					<Card.Title />
				</Card.Body>
			</Card>
		);
	}

	const imgSrc = recipe.images?.length && images[recipe.images[0]];

	return (
		<Card
			href={`/recipes/${recipe.id}`}
			className="relative hover:lg:scale-[1.01] hover:lg:border-gray-200 hover:lg:shadow-2xl"
		>
			<Card.Image
				imgSrc={imgSrc}
				alt="Tiramisu cappuccino"
				className="bottom-[55%] h-[500px] transition-all duration-500 ease-in-out group-hover:filter-none lg:grayscale"
				wrapperClassName="h-[250px]"
			/>
			<Card.Body className="pb-8 md:pb-8">
				<Card.Title>{recipe.name}</Card.Title>
				<div className="flex flex-col justify-between">
					<p>{recipe.description}</p>
					<div className="absolute bottom-3 left-auto mt-5 grid w-full grid-cols-2 gap-1 md:grid-cols-3">
						<div className="flex items-center">
							<FeatherIcon
								icon="clock"
								className="mr-2 stroke-1 transition-all duration-500 ease-in-out group-hover:text-nespresso-gold"
							/>
							{recipe.prepTime}
						</div>
						<div className="flex items-center">
							<FeatherIcon
								icon="target"
								className="mr-2 stroke-1 transition-all duration-500 ease-in-out group-hover:text-nespresso-gold"
							/>
							{recipe.difficulty}
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
