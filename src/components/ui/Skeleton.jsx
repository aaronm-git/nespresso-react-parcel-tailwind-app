import React from 'react';

export default function Skeleton({ children }) {
	return <div className="flex flex-col gap-3">{children}</div>;
}

Skeleton.Text = function SkeletonText({ children }) {
	return <div className="animate-pulse rounded-md bg-gray-200">{children}</div>;
};

Skeleton.Image = function SkeletonImage({ children }) {
	return <div className="animate-pulse rounded-md bg-gray-200">{children}</div>;
};
