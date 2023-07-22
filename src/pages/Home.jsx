import Container from '../components/ui/Container';

export default function Home() {
	return (
		<main>
			<section className="flex flex-col justify-center bg-recipes py-12 text-center md:py-20">
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
			</section>

			<Container>
				<section className="mt-10">
					<h2 className='text-center'>LATTE & CAPPUCCINO RECIPES</h2>
				</section>
			</Container>
		</main>
	);
}
