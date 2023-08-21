import React from 'react';

export default function Button({ children, className }) {
	const classes = `select-none font-nespresso	rounded bg-primary px-4 py-2 font-bold text-white transition-colors duration-300 ease-in-out	hover:bg-nespresso-gold ${className}`;
	return (
		<button className={classes}>
			<span className="relative top-px">{children}</span>
		</button>
	);
}
