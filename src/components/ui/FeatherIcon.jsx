import { useEffect, useRef, useState } from 'react';
import feather from 'feather-icons';

export default function FeatherIcon({ icon, className }) {
	const iconRef = useRef();
	const [iconKey, setIconKey] = useState(0);

	useEffect(() => {
		const iconElement = iconRef.current;
		iconElement.innerHTML = '';
		iconElement.setAttribute('data-feather', icon);
		feather.replace({ host: iconElement });
	}, [icon, iconKey]);

	const containerKey = `container-${icon}-${iconKey}`;

	return (
		<span key={containerKey}>
			<i ref={iconRef} className={`inline-block h-[1.5em] max-h-full w-[1.5em] ${className}`}></i>
		</span>
	);
}
