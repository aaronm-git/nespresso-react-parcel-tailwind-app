import React from 'react';
// get :id from url
import { useParams } from 'react-router-dom';

export default function Recipe() {
	const { id } = useParams();
	return <div>Recipe for {id}</div>;
}
