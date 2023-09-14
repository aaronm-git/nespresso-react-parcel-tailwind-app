import { useParams } from 'react-router-dom';
import useDB from 'hooks/useDB';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import PageNavigation from 'components/PageNavigation';
import Container from 'ui/Container';
export default function Content() {
	const { id } = useParams();
	const { data: recipe, loading, error } = useDB(`/recipes/${id}`);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<Container>
			<PageNavigation link="/recipes" />
			<div className="mb-8 flex w-full flex-wrap gap-y-3">
				<div className="flex w-full flex-col gap-3 md:w-1/2 md:pr-4">
					<LeftContent recipe={recipe} loading={loading} />
				</div>
				<div className="w-full md:w-1/2 md:pl-4">
					<RightContent recipe={recipe} loading={loading} />
				</div>
			</div>
		</Container>
	);
}
