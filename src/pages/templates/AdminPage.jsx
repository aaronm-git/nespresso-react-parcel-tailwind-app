import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export default function AdminPage() {
	return (
		<>
			<Navbar />
			<Sidebar>
				<Sidebar.Menu>
					<Sidebar.MenuLink linkTo="/admin" linkText="Dashboard" />
					<Sidebar.MenuLink linkTo="/admin/pods" linkText="Pods" />
					<Sidebar.MenuLink linkTo="/admin/users" linkText="Users" />
					<Sidebar.MenuLink linkTo="/admin/settings" linkText="Settings" />
					<Sidebar.MenuLink linkTo="/admin/new-pods" linkText="Create New Pods" />
				</Sidebar.Menu>
			</Sidebar>
			<main className="pt-5 md:ml-[200px]">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
