import { FlexRow, FlexCol } from 'ui/FlexLayout';

export default function CreateNewPodForm() {
	const cols = {
		sm: 12,
		md: 6,
		lg: 4,
	};
	return (
		<div className="">
			<h2>Create New Pod</h2>
			<form action="#">
				<FlexRow>
					<FlexCol col={cols}>
						<label htmlFor="podName">Pod Name</label>
						<input type="text" name="podName" id="podName" className="w-full" />
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="podDescription">Pod Description</label>
						<input type="text" name="podDescription" id="podDescription" className="w-full" />
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="podDescription">Pod Description</label>
						<input type="text" name="podDescription" id="podDescription" className="w-full" />
					</FlexCol>
				</FlexRow>
			</form>
		</div>
	);
}
