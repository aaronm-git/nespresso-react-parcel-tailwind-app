import React from 'react';
import FeatherIcon from './FeatherIcon';

export default function SpecialListItem({ imgSrc, children }) {
	return (
		<li className="mb-2 rounded bg-gray-100 p-1">
			<div className="flex flex-nowrap items-center gap-3 p-3">
				{imgSrc && (
					<div className="h-[50px] w-[50px] overflow-hidden rounded-full">
						<img src={imgSrc} className="h-full w-full object-cover" />
					</div>
				)}
				<div className="grow">{children}</div>
				<div>
					<button className="rounded-full bg-nespresso-gold text-right" type="button">
						<FeatherIcon icon="plus" className="stroke-1 text-white" />
					</button>
				</div>
			</div>
		</li>
	);
}
