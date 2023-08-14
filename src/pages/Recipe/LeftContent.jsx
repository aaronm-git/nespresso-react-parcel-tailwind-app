import useImageHelper from 'hooks/useImageHelper';
import Skeleton from 'ui/Skeleton';
import Card from 'ui/Card';

export default function LeftContent({ recipe, loading }) {
	const { getImage } = useImageHelper();

	if (loading) {
		return (
			<Skeleton>
				<Skeleton.Image />
				<Skeleton.Image />
			</Skeleton>
		);
	}

	return (
		<>
			<h1 className="m-0 text-center font-light md:hidden">{recipe.name}</h1>
			{recipe.images.map((imageSrc, index) => {
				const isHidden = index > 0;
				return (
					<Card className={isHidden && 'hidden md:block'} key={index}>
						<Card.Image imgSrc={getImage(imageSrc)} alt={recipe.name} />
					</Card>
				);
			})}
		</>
	);
}
