import { useContext } from 'react';
import ImagesContext from '../context/imagePathsContext';

export default function useImageHelper() {
	const images = useContext(ImagesContext);

	const getImage = (src) => {
		console.log('images', images);
		console.log('src', src);
		const imgSrc = images[src];
		return imgSrc || null;
	};

	return {
		getImage,
	};
}
