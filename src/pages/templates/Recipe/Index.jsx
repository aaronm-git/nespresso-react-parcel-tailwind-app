import PageNavigation from '../../../components/PageNavigation';
import Container from '../../../components/ui/Container';
import Content from './Content';

export default function Index() {
	return (
		<>
			<PageNavigation link="/" />
			<Container>
				<Content />
			</Container>
		</>
	);
}
