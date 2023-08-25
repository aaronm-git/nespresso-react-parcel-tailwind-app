import { useState, useEffect } from 'react';
import FeatherIcon from 'ui/FeatherIcon';

function Sidebar({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	return (
		<>
			<StickyMenuButton toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
			<nav
				className="group fixed top-0 z-10 h-full w-[200px] max-w-[200px] translate-x-0 transform overflow-x-hidden bg-gray-200 pb-[96px] pt-[64px] shadow transition-all duration-300 ease-in-out max-md:data-[issidebaropen=false]:-translate-x-full md:pb-[72px] lg:pb-[48px]"
				data-issidebaropen={isSidebarOpen}
			>
				<div className="border-b border-solid border-gray-300 p-3 py-5 text-center">
					<div className="mx-auto mb-2 inline-block rounded-full bg-nespresso-gold p-4 text-white">
						<FeatherIcon icon="layout" />
					</div>
					<p className="m-0 uppercase">Admin Panel</p>
				</div>
				{children}
			</nav>
		</>
	);
}

function Menu({ children }) {
	return <ul className="flex flex-col">{children}</ul>;
}

function Item({ children }) {
	return <li className="border-b border-solid border-gray-300 bg-gray-200 p-3 px-5">{children}</li>;
}

function StickyMenuButton({ toggleSidebar, isSidebarOpen }) {
	return (
		<div id="sidebarStickyMenuButton" className="absolute bottom-[100px] right-3 p-2">
			<button className="rounded-full bg-nespresso-gold p-3 text-white" onClick={toggleSidebar}>
				<FeatherIcon icon={isSidebarOpen ? 'x' : 'layout'} />
			</button>
		</div>
	);
}

Sidebar.Menu = Menu;
Sidebar.Item = Item;
export default Sidebar;
