import { useEffect } from 'react';
import feather from 'feather-icons';

export default function FeatherIcon({ icon, className }) {
	useEffect(() => {
		feather.replace();
	}, []);

	return <i data-feather={icon} className={`inline-block h-[1.5em] max-h-full w-[1.5em] ${className}`}></i>;
}
