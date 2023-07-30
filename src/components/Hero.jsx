import Container from './ui/Container';
export default function Hero(props) {
	const classes = `flex flex-col justify-center py-10 text-center md:py-24 ${props.className}`;
	return (
		<div className={classes}>
			<Container>
				{props.title && <h1>{props.title}</h1>}
				{props.subtitle && <h2>{props.subtitle}</h2>}
				{props.text && <p>{props.text}</p>}
			</Container>
		</div>
	);
}
