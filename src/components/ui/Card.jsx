function CardImage({ imgSrc, alt }) {
	return (
		<div className="h-[240px] w-auto overflow-hidden">
			<img
				src={imgSrc}
				alt={alt}
				className="relative bottom-[55%] h-[500] w-full bg-center object-cover transition-all duration-500 ease-in-out group-hover:filter-none lg:grayscale"
			/>
		</div>
	);
}

function CardBody({ children }) {
	return <div className="h-full p-4 md:p-5">{children}</div>;
}

function CardTitle({ children }) {
	return (
		<h3 className="mb-2 text-lg font-bold tracking-widest transition-all duration-500 ease-in-out group-hover:text-nespresso-gold max-lg:text-nespresso-gold lg:text-black">
			{children}
		</h3>
	);
}

function Card(props) {
	const { children, className, href, loading } = props;
	const loadingClasses = `
	relative
	invisible
	after:rounded-lg
	after:bg-gray-200
	after:absolute
	after:inset-0
	after:animate-pulse
	after:overflow-hidden
	after:animate-fast
	after:visible
	`;

	const classes = [
		loading
			? loadingClasses
			: `${href ? 'no-underline text-gray-800' : ''}
			bg-white
			rounded-lg
			overflow-hidden
			border
			border-gray-200
			transition-all
			duration-200
			ease-in-out
			shadow-lg
			group
			${className}
		`,
	];

	if (href) {
		return (
			<a href={href} className={classes}>
				{children}
			</a>
		);
	} else {
		return <div className={classes}>{children}</div>;
	}
}

Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
export default Card;
