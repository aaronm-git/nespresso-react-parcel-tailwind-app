import Hero from '../../components/Hero';

export default function HeroSection() {
	const title = (
		<>
			NESPRESSO
			<br />
			COFFEE RECIPES
		</>
	);

	const text =
		'Explore our wide variety of specialty coffees that bring inspired flavors and blends to the comfort of your home.';

	return <Hero title={title} text={text} bg="hero-recipes" />;
}
