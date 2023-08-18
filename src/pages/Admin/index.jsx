import React from 'react';
import Container from 'ui/Container';
import Sidebar from 'components/Sidebar';
export default function index() {
	return (
		<div className="flex h-full">
			<Sidebar>
				<Sidebar.Menu>
					<Sidebar.Item linkTo="/admin">Dashboard</Sidebar.Item>
					<Sidebar.Item linkTo="/admin/users">Users</Sidebar.Item>
					<Sidebar.Item linkTo="/admin/products">Products</Sidebar.Item>
				</Sidebar.Menu>
			</Sidebar>
			<Container className="overflow-hidden py-8">
				<h1 className="text-2xl font-bold">Dashboard</h1>
			</Container>
		</div>
	);
}
