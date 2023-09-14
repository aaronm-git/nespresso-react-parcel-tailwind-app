import React from 'react';
import FeatherIcon from './FeatherIcon';

export default function SpecialListItem({ imgSrc, children }) {
	return (
		<li className="mb-2 rounded bg-gray-100 p-1 px-2 shadow">
			<div className="flex flex-nowrap items-center gap-5 p-3">
				{imgSrc && (
					<div className="w-[50px] overflow-hidden rounded-full">
						<img src={imgSrc} className="h-full w-full object-contain" />
					</div>
				)}
				<div className="flex-1">{children}</div>
				{/* <div>
					<button className="rounded-full bg-nespresso-gold text-right" type="button">
						<FeatherIcon icon="plus" className="stroke-1 text-white" />
					</button>
				</div> */}
			</div>
		</li>
	);
}
