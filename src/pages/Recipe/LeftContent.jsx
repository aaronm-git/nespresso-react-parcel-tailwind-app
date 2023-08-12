import useImageHelper from 'hooks/useImageHelper';
import Skeleton from 'ui/Skeleton';
import Card from 'ui/Card';

export default function LeftContent({ recipe, loading }) {
	const { getImage } = useImageHelper();

	if (loading) {
		return (
			<w>
				<Skeleton.Text>
					<div className="h-8 w-1/2"></div>
				</Skeleton.Text>
				<Skeleton.Image>
					<div className="h-64 w-full"></div>
				</Skeleton.Image>
				<Skeleton.Image>
					<div className="h-64 w-full"></div>
				</Skeleton.Image>
			</w>
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
