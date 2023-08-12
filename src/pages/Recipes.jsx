import { Outlet } from 'react-router-dom';
import Container from 'ui/Container';

export default function Recipes() {
	return (
		<Container>
			<Outlet />
		</Container>
	);
}
