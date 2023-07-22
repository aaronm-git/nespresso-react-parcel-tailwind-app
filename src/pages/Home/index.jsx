import Container from '../../components/ui/Container';
import HeroSection from './HeroSection';

export default function Index() {
	return (
		<main>
			<section id='hero'>
				<HeroSection />
			</section>
			<Container>
				<section className="mt-10">
					<h2 className="text-center">LATTE & CAPPUCCINO RECIPES</h2>
				</section>
			</Container>
		</main>
	);
}
