import { useContext } from 'react';
import ImagesContext from 'contexts/imagePathsContext';

export default function useImageHelper() {
	const images = useContext(ImagesContext);

	const getImage = (src) => {
		const imgSrc = images[src];
		return imgSrc || null;
	};

	return {
		getImage,
	};
}
