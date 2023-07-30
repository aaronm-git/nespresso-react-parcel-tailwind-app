function CardImage({ imgSrc = 'https://via.placeholder.com/150', alt }) {
	return (
		<div className="h-[240px] w-auto">
			<img src={imgSrc} alt={alt} className="h-full w-full object-cover" />
		</div>
	);
}

function CardBody({ children }) {
	return <div className="p-4 md:p-5">{children}</div>;
}

function CardTitle({ children }) {
	return <h3 className="text-xl font-bold">{children}</h3>;
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
		'hover:border-gray-300',
		'hover:lg:scale-[1.01]',
		'transition-all',
		'duration-200',
		'ease-in-out',
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
