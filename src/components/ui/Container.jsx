export default function Container({ className, children }) {
	return <div className={`container mx-auto px-2 md:px-4 ${className}`}>{children}</div>;
}
