import Container from './ui/Container';
export default function Footer() {
	return (
		<footer className="fixed bottom-0 left-0 w-full bg-black py-3 text-center text-white">
			<Container>
				<small>
					Brewed with love and code, this project represents my passion for both coffee and coding. You can
					find more of my work at <a href="https://aaronmolina.me">aaronmolina.me</a>
				</small>
			</Container>
		</footer>
	);
}
