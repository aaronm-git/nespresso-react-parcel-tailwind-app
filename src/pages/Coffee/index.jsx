import { useParams } from 'react-router-dom';
import Card from 'ui/Card';
import useDB from 'hooks/useDB';
import useImageHelper from 'hooks/useImageHelper';
import Container from 'ui/Container';
import FeatherIcon from 'ui/FeatherIcon';
import Skeleton from 'ui/Skeleton';
import MugShotCard from 'components/MugShotCard';

export default function Coffee() {
	const { id } = useParams();
	const { data: coffee, loading, error } = useDB(`/coffees/${id}`);
	console.log('data', coffee, '\nloading', loading, '\nerror', error);

	if (loading)
		return (
			<>
				<section className="min-h-[500px] bg-gradient-to-t from-[#F9F7F6] from-60% to-[#EDEAE6] to-50% p-5 lg:py-20">
					<div className="container mx-auto flex flex-col justify-end text-center lg:flex-row">
						<div className="grow">
							<div className="lg:ml-auto lg:mr-3 lg:w-2/3">
								<Skeleton.Image dark />
							</div>
						</div>
						<Card className="my-3 w-full lg:w-[400px]">
							<Card.Body>
								<Skeleton>
									<Skeleton.Text />
									<Skeleton.Title />
									<Skeleton.Text />
									<Skeleton.Button />
								</Skeleton>
							</Card.Body>
						</Card>
					</div>
				</section>
				<section className="bg-[#EDEAE6] py-12">
					<Container className="grid grid-cols-1 gap-3 gap-x-10 lg:grid-cols-2">
						<div>
							<h2 className="text-4xl">Taste</h2>
							<div>
								<Skeleton.Text dark />
							</div>
						</div>
						<div className="hidden lg:block"></div>
						<div>
							<table className="w-full">
								<tbody>
									<tr className="border-b border-t border-solid border-gray-300">
										<td className="py-5 align-top">
											<p className="m-0 font-bold">BEST SERVED AS</p>
										</td>
										<td className="w-64 py-5 pl-10">
											<div className="m-0 h-2 w-full">
												<Skeleton dark />
											</div>
											<div className="m-0">
												<Skeleton dark />
											</div>
										</td>
									</tr>
									<tr>
										<td className="py-5 align-top">
											<div className="m-0 font-bold">NOTES</div>
										</td>
										<td className="w-64 py-5 pl-10">
											<div className="m-0 h-2 w-full">
												<Skeleton dark />
											</div>
											<div className="m-0">
												<Skeleton dark />
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="border-t border-solid border-gray-300">
							<div className="my-4 flex flex-row items-center gap-3">
								<span className="w-28">BITTERNESS</span>
								<div className="grid grow grid-cols-5 gap-x-1">
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
								</div>
							</div>
							<div className="my-4 flex flex-row items-center gap-3">
								<span className="w-28">ACIDITY</span>
								<div className="grid grow grid-cols-5 gap-x-1">
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
								</div>
							</div>
							<div className="my-4 flex flex-row items-center gap-3">
								<span className="w-28">ROAST LEVEL</span>
								<div className="grid grow grid-cols-5 gap-x-1">
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
								</div>
							</div>
							<div className="my-4 flex flex-row items-center gap-3">
								<span className="w-28">BODY</span>
								<div className="grid grow grid-cols-5 gap-x-1">
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
									<span className="h-1">
										<Skeleton dark />
									</span>
								</div>
							</div>
						</div>
					</Container>
				</section>
			</>
		);

	if (error) return <div>Error: {JSON.stringify(error, null, 2)}</div>;

	const { getImage } = useImageHelper();
	const imgSrc = getImage(coffee.productImages[0]);

	return (
		<div>
			<section className="bg-gradient-to-t from-[#F9F7F6] from-60% to-[#EDEAE6] to-50% p-5 lg:py-20">
				<MugShotCard imgSrc={imgSrc} coffee={coffee} />
			</section>
			<section className="bg-[#EDEAE6] py-12">
				<Container className="grid grid-cols-1 gap-3 gap-x-10 lg:grid-cols-2">
					<div>
						<h2 className="text-4xl">Taste</h2>
						<p>{coffee.tasteDescription}</p>
					</div>
					<div className="hidden lg:block"></div>
					<div>
						<table className="w-full">
							<tbody>
								<tr className="border-b border-t border-solid border-gray-300">
									<td className="py-5 align-top">
										<p className="m-0 font-bold">BEST SERVED AS</p>
									</td>
									<td className="py-5 pl-10">
										<p className="m-0">{coffee.type}</p>
										<p className="m-0">{coffee.size}</p>
									</td>
								</tr>
								<tr>
									<td className="py-5 align-top">
										<p className="m-0 font-bold">NOTES</p>
									</td>
									<td className="py-5 pl-10">
										<p className="m-0">{coffee.notes}</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="border-t border-solid border-gray-300">
						<div className="my-4 flex flex-row items-center gap-3">
							<span className="w-28">BITTERNESS</span>
							<div className="grid grow grid-cols-5 gap-x-1">
								{new Array(5).fill(null).map(function (_, index) {
									if (index + 1 === Number(coffee.bitterness)) {
										return <span key={index} className="h-1 bg-corn-harvest-950"></span>;
									}
									if (index + 1 > Number(coffee.bitterness)) {
										return <span key={index} className="h-1 bg-corn-harvest-950 opacity-30"></span>;
									}
									return <span key={index} className="h-1 bg-corn-harvest-950"></span>;
								})}
							</div>
							<div title={coffee.bitterness}>
								<FeatherIcon icon="info" className="stroke-1 text-xs" />
							</div>
						</div>
						<div className="my-4 flex flex-row items-center gap-3">
							<span className="w-28">ACIDITY</span>
							<div className="grid grow grid-cols-5 gap-x-1">
								{new Array(5).fill(null).map(function (_, index) {
									if (index + 1 === Number(coffee.acidity)) {
										return <span key={index} className="h-1 bg-corn-harvest-950"></span>;
									}
									if (index + 1 > Number(coffee.acidity)) {
										return <span key={index} className="h-1 bg-corn-harvest-950 opacity-30"></span>;
									}
									return <span key={index} className="h-1 bg-corn-harvest-950"></span>;
								})}
							</div>
							<div title={coffee.acidity}>
								<FeatherIcon icon="info" className="stroke-1 text-xs" />
							</div>
						</div>
						<div className="my-4 flex flex-row items-center gap-3">
							<span className="w-28">ROAST LEVEL</span>
							<div className="grid grow grid-cols-5 gap-x-1">
								{new Array(5).fill(null).map(function (_, index) {
									if (index + 1 === Number(coffee.roastLevel)) {
										return <span key={index} className="h-1 bg-corn-harvest-950"></span>;
									}
									if (index + 1 > Number(coffee.roastLevel)) {
										return <span key={index} className="h-1 bg-corn-harvest-950 opacity-30"></span>;
									}
									return <span key={index} className="h-1 bg-corn-harvest-950"></span>;
								})}
							</div>
							<div title={coffee.roastLevel}>
								<FeatherIcon icon="info" className="stroke-1 text-xs" />
							</div>
						</div>
						<div className="my-4 flex flex-row items-center gap-3">
							<span className="w-28">BODY</span>
							<div className="grid grow grid-cols-5 gap-x-1">
								{new Array(5).fill(null).map(function (_, index) {
									if (index + 1 === Number(coffee.body)) {
										return <span key={index} className="h-1 bg-corn-harvest-950"></span>;
									}
									if (index + 1 > Number(coffee.body)) {
										return <span key={index} className="h-1 bg-corn-harvest-950 opacity-30"></span>;
									}
									return <span key={index} className="h-1 bg-corn-harvest-950"></span>;
								})}
							</div>
							<div title={coffee.body}>
								<FeatherIcon icon="info" className="stroke-1 text-xs" />
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
