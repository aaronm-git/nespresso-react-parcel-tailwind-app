import { useParams } from 'react-router-dom';
import useDB from '../../../hooks/useDB';
import useImageHelper from '../../../hooks/useImageHelper';
import Card from '../../../components/ui/Card';
import RecipeInstructions from '../../../components/RecipeInstructions';

export default function Content() {
	const { id } = useParams();
	const { data: recipe, loading, error } = useDB(`/recipes/${id}`);

	const { getImage } = useImageHelper();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="flex w-full flex-wrap py-5">
			<div className="flex flex-col gap-3 md:w-1/2 md:pr-4">
				<h1 className="text-center font-light md:hidden">{recipe.name}</h1>
				{recipe.images.map((imageSrc, index) => {
					const isHidden = index > 0;
					return (
						<Card className={isHidden && 'hidden md:block'} key={index}>
							<Card.Image imgSrc={getImage(imageSrc)} alt={recipe.name} />
						</Card>
					);
				})}
			</div>
			<div className="md:w-1/2 md:pl-4">
				<RecipeInstructions recipe={recipe} loading={loading} />
			</div>
		</div>
	);
}
