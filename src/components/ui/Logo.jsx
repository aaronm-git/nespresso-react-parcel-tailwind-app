import LogoImage from 'public/images/logo-white.svg';

export default function Logo(props) {
	const { small, medium, large } = props;
	const size = small ? 'h-6' : medium ? 'h-8' : large ? 'h-10' : 'h-8';
	return <img src={LogoImage} alt="Nespresso Recipes" className={`${size} ${'inline-block w-auto'}`} />;
}
