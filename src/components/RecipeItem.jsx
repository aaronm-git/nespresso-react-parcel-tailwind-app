import { useContext } from 'react';
import ImagesContext from '../context/imagePathsContext';
import Card from './ui/Card';

export default function RecipeItem({ recipe }) {
	const images = useContext(ImagesContext);
	console.log('images', images);
	const imgSrc = images[recipe.images[0]] || 'https://via.placeholder.com/400';
	return (
		<Card href="#">
			<Card.Image imgSrc={imgSrc} alt="Tiramisu cappuccino" />
			<Card.Body>
				<Card.Title>{recipe.name}</Card.Title>
				{recipe.description}
			</Card.Body>
		</Card>
	);
}
