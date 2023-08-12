import { useParams } from 'react-router-dom';
import useDB from 'hooks/useDB';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import PageNavigation from 'components/PageNavigation';
export default function Content() {
	const { id } = useParams();
	const { data: recipe, loading, error } = useDB(`/recipes/${id}`);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			<PageNavigation link="/recipes" />
			<div className="flex w-full flex-wrap">
				<div className="flex flex-col gap-3 md:w-1/2 md:pr-4">
					<LeftContent recipe={recipe} loading={loading} />
				</div>
				<div className="md:w-1/2 md:pl-4">
					<RightContent recipe={recipe} loading={loading} />
				</div>
			</div>
		</>
	);
}
