import React from 'react';
import Container from 'ui/Container';
import Sidebar from 'components/Sidebar';
import CreateNewPodForm from './CreateNewPodForm';
export default function index() {
	return (
		<div className="flex h-full">
			<Sidebar>
				<Sidebar.Menu className="grow">
					<Sidebar.Item linkTo="/admin">Dashboard</Sidebar.Item>
					<Sidebar.Item linkTo="/admin/users">Users</Sidebar.Item>
					<Sidebar.Item linkTo="/admin/products">Products</Sidebar.Item>
				</Sidebar.Menu>
			</Sidebar>
			<Container className="py-5 md:overflow-hidden">
				<h1>Dashboard</h1>
				<CreateNewPodForm />
			</Container>
		</div>
	);
}
