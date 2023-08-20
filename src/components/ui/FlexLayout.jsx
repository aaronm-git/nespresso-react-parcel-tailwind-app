export function FlexRow({ children, className, cols = 1 }) {
	const classes = `-mx-1 flex flex-wrap ${className ? className : ''}`;
	return <div className={classes}>{children}</div>;
}

export function FlexCol({ children, className, col = 1 }) {
	const classes = `px-1 mb-3${className ? className : ''}`;
	const colSize = getColClasses(col);
	return <div className={`${classes} ${colSize}`}>{children}</div>;
}

function getColClasses(col) {
	const isObject = typeof col === 'object';
	if (isObject) {
		const keys = Object.keys(col);
		const values = Object.values(col);
		const colSize = values.map((value, index) => {
			const key = keys[index];
			const isFullWidth = value === 12;
			if (key === 'sm') {
				return isFullWidth ? 'w-full' : `w-${value}/12`;
			} else {
				return isFullWidth ? `${key}:w-full` : `${key}:w-${value}/12`;
			}
		});
		return colSize.join(' ');
	} else {
		return `w-${col}/12`;
	}
}
