import { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'ui/FeatherIcon';

function Sidebar({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	const classes = `h-full w-full max-w-xs bg-gray-200 transform transition-all ease-in-out duration-300 overflow-hidden ${
		isSidebarOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
	}`;
	return (
		<nav className={classes}>
			<MenuButton isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
			{children}
		</nav>
	);
}

function Menu({ children }) {
	return <ul className="flex flex-col">{children}</ul>;
}

function Item(linkTo) {
	return (
		<li className="border-b border-solid border-gray-400 bg-gray-200 text-center text-nespresso-gold active:bg-nespresso-gold active:text-white">
			<Link to={linkTo} className="block p-3 px-2 text-inherit no-underline">
				Item
			</Link>
		</li>
	);
}

function MenuButton({ isSidebarOpen, toggleSidebar }) {
	if (!isSidebarOpen) {
		return (
			<button
				className="absolute bottom-3 left-full z-10 w-auto rounded-full bg-nespresso-gold p-3 text-white hover:bg-black"
				onClick={toggleSidebar}
			>
				<FeatherIcon icon="layout" />
			</button>
		);
	}

	return (
		<div className="border-b border-solid border-gray-400 p-2 text-center">
			<button className="rounded-full bg-nespresso-gold p-3 text-white hover:bg-black" onClick={toggleSidebar}>
				<FeatherIcon icon="layout" />
			</button>
		</div>
	);
}

Sidebar.Menu = Menu;
Sidebar.Item = Item;
export default Sidebar;
