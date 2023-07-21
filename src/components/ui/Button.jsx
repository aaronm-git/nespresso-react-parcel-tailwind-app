import React from 'react';

export default function Button({ children }) {
	return (
		<button className="rounded bg-primary px-4 py-2 font-nespresso font-bold text-white transition-colors duration-300 ease-in-out	hover:bg-nespresso-gold">
			{children}
		</button>
	);
}
