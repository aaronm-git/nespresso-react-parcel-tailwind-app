import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import { Link } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export default function AdminPage() {
	return (
		<>
			<Navbar />
			<Sidebar>
				<Sidebar.Menu>
					<Sidebar.Item>
						<Link to="/admin/">Dashboard</Link>
					</Sidebar.Item>
					<Sidebar.Item>
						<Link to="/admin/pods">Pods</Link>
					</Sidebar.Item>
					<Sidebar.Item>
						<Link to="/admin/new-pods">Create New Pods</Link>
					</Sidebar.Item>
					<Sidebar.Item>
						<Link to="/admin/user">My Profile</Link>
					</Sidebar.Item>
				</Sidebar.Menu>
			</Sidebar>
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
