import Container from '../../components/ui/Container';
import HeroSection from './HeroSection';
import RecipeList from '../../components/RecipeList';

export default function Index() {
	return (
		<main>
			<section id="hero">
				<HeroSection />
			</section>
			<section className="mt-10">
				<Container>
					<h2 className="text-center">FEATURED RECIPES</h2>
					<RecipeList />
				</Container>
			</section>
		</main>
	);
}
