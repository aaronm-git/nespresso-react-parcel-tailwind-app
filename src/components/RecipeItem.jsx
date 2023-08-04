import { useContext } from 'react';
import ImagesContext from '../context/imagePathsContext';
import Card from './ui/Card';
import FeatherIcon from './ui/FeatherIcon';

export default function RecipeItem({ recipe }) {
	const images = useContext(ImagesContext);
	const imgSrc = (recipe.images?.length && images[recipe.images[0]]) || 'https://via.placeholder.com/400';

	return (
		<Card href="#">
			<Card.Image imgSrc={imgSrc} alt="Tiramisu cappuccino" />
			<Card.Body>
				<Card.Title>{recipe.name}</Card.Title>
				<div className="flex h-full flex-col justify-between">
					<p>{recipe.description}</p>
					<div className="mt-5 grid grid-cols-2 gap-1 md:grid-cols-3">
						<div className="flex items-center">
							<FeatherIcon icon="clock" className="mr-1 stroke-1 text-nespresso-gold" />
							{recipe.prepTime}
						</div>
						<div className="flex items-center">
							<FeatherIcon icon="target" className="mr-1 stroke-1 text-nespresso-gold" />
							{recipe.difficulty}
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
