function CardImage({ imgSrc = 'https://via.placeholder.com/150', alt }) {
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
	const { children, className, href } = props;
	const classes = [
		href && 'no-underline text-gray-900',
		'bg-white',
		'rounded-lg',
		'overflow-hidden',
		'shadow-lg',
		'hover:lg:shadow-2xl',
		'border',
		'border-gray-200',
		'hover:lg:border-gray-200',
		'hover:lg:scale-[1.01]',
		'transition-all',
		'duration-200',
		'ease-in-out',
		'group',
		className,
	]
		.filter((c) => c !== false)
		.join(' ');

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
