import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export default function Page() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
