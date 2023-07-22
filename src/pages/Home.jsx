import Container from '../components/ui/Container';

export default function Home() {
	return (
		<main>
			<div className="flex flex-col justify-center bg-recipes py-14 md:py-20 text-center">
				<Container>
					<h1>
						NESPRESSO
						<br />
						COFFEE RECIPES
					</h1>
					<p>
						Explore our wide variety of specialty coffees that bring inspired flavors and blends to the
						comfort of your home.
					</p>
				</Container>
			</div>
		</main>
	);
}
