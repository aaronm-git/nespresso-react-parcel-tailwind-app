import React from 'react';
import Container from 'ui/Container';
import Sidebar from 'components/Sidebar';
import { Link, Outlet } from 'react-router-dom';
export default function index() {
	return (
		<div className="flex h-full md:overflow-hidden">
			<Sidebar className="flex-1">
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
			<Container className="flex-1 py-5">
				<Outlet />
			</Container>
		</div>
	);
}
