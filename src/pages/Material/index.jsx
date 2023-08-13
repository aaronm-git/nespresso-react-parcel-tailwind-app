import { useParams } from 'react-router-dom';
import Card from 'ui/Card';
import useDB from 'hooks/useDB';
import Container from 'ui/container';

export default function Material() {
	const { id } = useParams();
	const { data, loading, error } = useDB(`/materials/${id}`);
	console.log('data', data, '\nloading', loading, '\nerror', error);
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {JSON.stringify(error, null, 2)}</div>;

	return (
		<div className="min-h-[500px] bg-[#EEEBE7] px-5 py-24">
			<Container className="flex justify-end">
				<Card className="w-full md:w-auto md:px-24">
					<Card.Body>
						<EyebrowText text="VERTUO" />
						<EyebrowText text="BARISTA CREATIONS" className="font-light" />
						<h1 className="text-center text-4xl font-bold text-gray-800">{data.name}</h1>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

function EyebrowText({ text, className }) {
	const classes = `text-center font-bold text-gray-500 ${className || ''}`;
	return <div className={classes}>{text}</div>;
}
