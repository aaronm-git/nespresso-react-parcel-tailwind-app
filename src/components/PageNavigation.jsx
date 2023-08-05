import FeatherIcon from './ui/FeatherIcon';

export default function PageNavigation({ link = '/' }) {
	return (
		<div className="p-4 text-nespresso-gold">
			<a href={link} className="no-underline">
				<FeatherIcon icon="arrow-left" className="mr-1" />
				Back
			</a>
		</div>
	);
}
