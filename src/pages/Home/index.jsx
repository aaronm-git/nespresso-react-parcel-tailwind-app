import Container from 'ui/Container';
import HeroSection from './HeroSection';
import RecipeList from 'components/RecipeList';

export default function Index() {
	return (
		<>
			<section>
				<HeroSection />
			</section>
			<section className="my-8">
				<Container>
					<h2 className="text-center">FEATURED RECIPES</h2>
					<RecipeList />
				</Container>
			</section>
		</>
	);
}
