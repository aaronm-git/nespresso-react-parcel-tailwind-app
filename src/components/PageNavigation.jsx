import FeatherIcon from './ui/FeatherIcon';
import { Link } from 'react-router-dom';

export default function PageNavigation({ link = '/' }) {
	return (
		<div className="p-4 text-nespresso-gold">
			<Link to={link} className="no-underline">
				<FeatherIcon icon="arrow-left" className="mr-1" />
				Back
			</Link>
		</div>
	);
}
