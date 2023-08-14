import Card from 'ui/Card';

export default function MugShotCard({ imgSrc, coffee }) {
	return (
		<div className="container mx-auto flex flex-wrap items-center text-center">
			<div className="w-full md:w-7/12 lg:w-2/3">
				<div className="ml-auto max-w-2xl">
					<img src={imgSrc} alt={coffee.name} className="w-full" />
				</div>
			</div>
			<div className="w-full md:w-5/12 lg:w-1/3">
				<Card className="">
					<Card.Body>
						<CoffeeProductSubText text={coffee.podType} />
						<CoffeeProductSubText text={coffee.type} className="mb-5 font-light" />
						<h1 className="text-center text-4xl font-bold text-gray-800">{coffee.name}</h1>
						<CoffeeProductSubText text={coffee.description} className="font-light" />
						<IntensityLevel intensityAmount={coffee.intensity} />
						<Price amount="9.80" locale="US" />
						<p className="mb-3 mt-4 text-sm text-gray-500">Per Capsule: $0.98</p>
						<AddToCartButton productId={coffee.id} entityType="coffee" />
					</Card.Body>
				</Card>{' '}
			</div>
		</div>
	);
}

function CoffeeProductSubText({ text, className }) {
	const classes = `text-center font-bold text-gray-500 uppercase ${className || ''}`;
	return <div className={classes}>{text}</div>;
}

function IntensityLevel({ intensityAmount = 0 }) {
	// if string convert to number
	const classes = 'text-nespresso-gold text-center my-6';
	const levelClasses = 'font-bold';
	return (
		<div className={classes}>
			Intensity:{' '}
			{new Array(15).fill(null).map(function (_, index) {
				if (index + 1 === Number(intensityAmount)) {
					return (
						<span key={index} className={levelClasses + ' mx-1'}>
							{intensityAmount}
						</span>
					);
				}
				if (index + 1 > Number(intensityAmount)) {
					return (
						<span key={index} className={levelClasses + ' opacity-40'}>
							|
						</span>
					);
				}
				return (
					<span key={index} className={levelClasses}>
						|
					</span>
				);
			})}
		</div>
	);
}

function Price({ amount }) {
	const classes = 'text-nespresso-green text-3xl font-bold tracking-widest';
	return <div className={classes}>${amount}</div>;
}

function AddToCartButton({ productId, entityType }) {
	const classes =
		'bg-nespresso-green text-white uppercase py-3 px-6 rounded-full text-lg hover:bg-limeade-800 transition-colors ease-in-out duration-150';
	return (
		<button className={classes} onClick={() => console.log('clicked')}>
			Add to cart
		</button>
	);
}
