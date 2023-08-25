import { useState } from 'react';
import FeatherIcon from 'ui/FeatherIcon';

function Sidebar({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	return (
		<div
			className="group fixed top-0 h-full w-auto pb-[96px] pt-[64px] md:pb-[72px] lg:pb-[48px]"
			data-issidebaropen={isSidebarOpen}
		>
			<StickyMenuButton toggleSidebar={toggleSidebar} />
			<nav className="h-full w-[200px] max-w-[200px] translate-x-0 transform overflow-x-hidden bg-gray-200 shadow transition-all duration-300 ease-in-out max-md:group-data-[issidebaropen=false]:-translate-x-full">
				<MenuButton issidebaropen={isSidebarOpen} toggleSidebar={toggleSidebar} />
				{children}
			</nav>
		</div>
	);
}

function Menu({ children }) {
	return <ul className="flex flex-col">{children}</ul>;
}

function Item({ children }) {
	return <li className="border-b border-solid border-gray-300 bg-gray-200 p-3 px-5">{children}</li>;
}

function StickyMenuButton({ toggleSidebar }) {
	return (
		<div
			id="sidebarStickyMenuButton"
			className="absolute bottom-[160px] p-2 opacity-0 transition-opacity ease-in-out max-md:group-data-[issidebaropen=false]:opacity-100"
		>
			<button className="rounded-full bg-nespresso-gold p-3 text-white" onClick={toggleSidebar}>
				<FeatherIcon icon="layout" />
			</button>
		</div>
	);
}

function MenuButton({ toggleSidebar }) {
	return (
		<div className="border-b border-solid border-gray-300 p-3 py-5 text-center">
			<button
				className="mb-2 rounded-full bg-nespresso-gold p-3 text-white hover:bg-black md:cursor-default"
				onClick={toggleSidebar}
			>
				<FeatherIcon icon="layout" />
			</button>
			<p className="m-0 uppercase">Admin Panel</p>
		</div>
	);
}

Sidebar.Menu = Menu;
Sidebar.Item = Item;
export default Sidebar;
