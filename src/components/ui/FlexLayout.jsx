export function FlexRow({ children, className }) {
	const classes = `-mx-2 flex flex-wrap ${className ? className : ''}`;
	return <div className={classes}>{children}</div>;
}

export function FlexCol({ children, className, col = 12 }) {
	const classes = 'px-2 mb-2';
	const colSize = getColClasses(col);
	return <div className={`${classes} ${colSize} ${className ? className : ''}`}>{children}</div>;
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
		if (col === 12) {
			return 'w-full';
		}
		return `w-${col}/12`;
	}
}
