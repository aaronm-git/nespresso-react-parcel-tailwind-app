import { FlexRow, FlexCol } from 'ui/FlexLayout';
import Button from 'ui/Button';
import Select from 'ui/Select';
import Skeleton from 'ui/Skeleton';

export default function CreateNewPodForm({ loading }) {
	const cols = {
		sm: 12,
		md: 6,
		lg: 4,
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};

	if (loading)
		return (
			<Skeleton>
				<FlexRow>
					<FlexCol col={12}>
						<Skeleton.Title />
					</FlexCol>
					{[...Array(8)].map((_, i) => (
						<FlexCol key={i} col={cols}>
							<div className="mb-2 h-4 w-24">
								<Skeleton />
							</div>
							<Skeleton.Input />
						</FlexCol>
					))}
				</FlexRow>
			</Skeleton>
		);

	return (
		<div>
			<h2 className="text-xl">Create New Pod</h2>
			<form action="#" method="POST" onSubmit={onSubmit}>
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
						<label htmlFor="podType">Pod Type</label>
						<Select name="pod_type">
							<Select.Option label="Vertuo" value="vertuo">
								Vertuo <span className="text-xs text-gray-400">(default)</span>
							</Select.Option>
							<Select.Option label="Classic" value="classic" />
						</Select>
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="tasteProfile">Taste Profile</label>
						<Select name="taste_profile">
							<Select.Option label="Intense" value="intense">
								Intense <span className="text-xs text-gray-400">(default)</span>
							</Select.Option>
							<Select.Option label="Balanced" value="balanced" />
							<Select.Option label="Mild" value="mild" />
						</Select>
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="intensity">Intensity</label>
						<input type="number" name="intensity" id="intensity" className="w-full" max={5} min={0} />
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="bitterness">Bitterness</label>
						<input type="number" name="bitterness" id="bitterness" className="w-full" max={5} min={0} />
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="acidity">Acidity</label>
						<input type="number" name="acidity" id="acidity" className="w-full" max={5} min={0} />
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="roastLevel">Roast Level</label>
						<input type="number" name="roast_level" id="roastLevel" className="w-full" max={5} min={0} />
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="body">Body</label>
						<input type="number" name="body" id="body" className="w-full" max={5} min={0} />
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="numPods">Number of Pods</label>
						<input type="number" name="num_pods" id="numPods" className="w-full" max={99} min={0} />
					</FlexCol>
					<FlexCol col={cols}>
						<label htmlFor="productID">Product ID</label>
						<Select name="product_id">
							<Select.Option label="Vertuo" value="vertuo">
								Vertuo <span className="text-xs text-gray-400">(default)</span>
							</Select.Option>
							<Select.Option label="Classic" value="classic" />
						</Select>
					</FlexCol>
					<FlexCol>
						<label htmlFor="podCategoryID">Pod Category ID</label>
						<Select name="pod_category_id">
							<Select.Option label="Vertuo" value="vertuo">
								Vertuo <span className="text-xs text-gray-400">(default)</span>
							</Select.Option>
							<Select.Option label="Classic" value="classic" />
						</Select>
					</FlexCol>
				</FlexRow>
				<Button>SUBMIT</Button>
			</form>
		</div>
	);
}

/*

    id uuid not null default gen_random_uuid (),
    name text null,
    taste_profile text null,
    pod_type text null,
    intensity smallint null,
    description text null,
    notes text null,
    bitterness numeric null,
    acidity smallint null,
    roast_level smallint null,
    body smallint null,
    num_pods smallint null,
    product_id uuid null,
    pod_category_id uuid null,

	
*/
