import React from 'react';

export default function Button({ children }) {
	return (
		<button className="rounded bg-primary px-4 py-2 font-nespresso font-bold text-white hover:bg-blue-700">
			{children}
		</button>
	);
}
