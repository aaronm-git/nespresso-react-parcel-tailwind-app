import { Outlet } from 'react-router-dom';
import Container from 'ui/Container';
export default function Products() {
	return (
		<Container>
			<Outlet />
		</Container>
	);
}
