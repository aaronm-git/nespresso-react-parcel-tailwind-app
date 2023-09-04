import React from 'react';

export default function Skeleton({ children, dark, className }) {
	const classes =
		'h-full w-full animate-pulse rounded-md bg-gray-200' +
		`${dark ? ' bg-gray-400' : ''}` +
		`${className ? className : ''}`;
	if (children) {
		return <div className={`flex flex-col gap-3 ${className ? className : ''}`}>{children}</div>;
	} else return <div className={classes} />;
}

function SkeletonTitle({ dark }) {
	const classes = 'h-8 w-2/3 animate-pulse rounded-md bg-gray-200' + `${dark ? ' bg-gray-400' : ''}`;
	return <div className={classes} />;
}

function SkeletonText({ dark }) {
	const classes1 = 'h-4 w-full animate-pulse rounded-md bg-gray-200' + `${dark ? ' bg-gray-400' : ''}`;
	const classes2 = 'h-4 w-3/4 animate-pulse rounded-md bg-gray-200' + `${dark ? ' bg-gray-400' : ''}`;
	return (
		<div className="flex flex-col gap-1">
			<div className={classes1} />
			<div className={classes2} />
			<div className={classes1} />
		</div>
	);
}

function SkeletonImage({ dark }) {
	const classes = 'h-80 w-full animate-pulse rounded-md bg-gray-200' + `${dark ? ' bg-gray-400' : ''}`;
	return <div className={classes} />;
}

function SkeletonButton({ dark }) {
	const classes = 'h-12 w-36 animate-pulse rounded-full bg-gray-200' + `${dark ? ' bg-gray-400' : ''}`;
	return <div className={classes} />;
}

function SkeletonInput({ dark }) {
	const classes = 'h-10 mb-2 w-full animate-pulse rounded-md bg-gray-200' + `${dark ? ' bg-gray-400' : ''}`;
	return <div className={classes} />;
}

Skeleton.Title = SkeletonTitle;
Skeleton.Input = SkeletonInput;
Skeleton.Text = SkeletonText;
Skeleton.Image = SkeletonImage;
Skeleton.Button = SkeletonButton;
