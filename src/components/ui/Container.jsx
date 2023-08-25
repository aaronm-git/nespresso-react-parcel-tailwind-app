export default function Container({ className, children }) {
	return <div className={`container mx-auto px-4 ${className ? className : ''}`}>{children}</div>;
}
