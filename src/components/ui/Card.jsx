import { Link } from 'react-router-dom';

function CardImage({ imgSrc, alt, className, wrapperClassName }) {
	return (
		<div className={`w-auto overflow-hidden ${wrapperClassName || ''}`}>
			<img src={imgSrc} alt={alt} className={`relative w-full bg-center object-cover ${className || ''}`} />
		</div>
	);
}

function CardBody({ children, className }) {
	return <div className={`p-5 md:p-6 ${className || ''}`}>{children}</div>;
}

function CardTitle({ children, className }) {
	return (
		<h3
			className={`mb-2 text-lg font-bold tracking-widest transition-all duration-500 ease-in-out group-hover:text-nespresso-gold max-lg:text-nespresso-gold lg:text-inherit ${
				className || ''
			}`}
		>
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
			: `${href ? 'no-underline text-inherit' : ''}
			bg-white
			rounded-lg
			overflow-hidden
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
			<Link to={href} className={classes}>
				{children}
			</Link>
		);
	} else {
		return <div className={classes}>{children}</div>;
	}
}

Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
export default Card;
