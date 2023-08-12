export default function Section({ title, children }) {
	return (
		<section>
			{title && <h2 className="mb-3 text-2xl font-light">{title}</h2>}
			{children}
		</section>
	);
}
