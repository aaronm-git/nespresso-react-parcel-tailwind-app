import * as allImages from '../public/images/**/*';

/*
    Images = {
        "image1": "path/to/image1",
        "image2": "path/to/image2",
        "nested": {
            "image3": "path/to/image3",
            "image4": "path/to/image4"
        }
    }
*/

function flattenImages(images, prefix = '') {
	return Object.keys(images).reduce((acc, key) => {
		const image = images[key];
		if (typeof image === 'string') {
			return {
				...acc,
				[`${prefix}${key}`]: image,
			};
		}
		return {
			...acc,
			...flattenImages(image, `${prefix}${key}/`),
		};
	}, {});
}

export default {
	...flattenImages(allImages),
};
