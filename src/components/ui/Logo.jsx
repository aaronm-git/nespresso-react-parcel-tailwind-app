import LogoImage from '../../public/images/logo-white.svg';
export default function Logo(props) {
	const { small, medium, large } = props;
	const size = small ? 'h-4' : medium ? 'h-6' : large ? 'h-8' : 'h-6';
	return (
		<img
			src={LogoImage}
			alt="Nesspress Recipes"
			className={`
        ${size}
        ${'w-auto inline-block'}
    `}
		/>
	);
}
