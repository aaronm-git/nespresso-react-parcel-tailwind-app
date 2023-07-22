import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="w-full bg-black text-white md:flex md:px-4">
			<div className="relative z-10 mr-auto flex items-center bg-black max-md:px-4">
				<div className="flex flex-shrink-0">
					<Link to="/">
						<Logo small /> <span className="antialiased">Recipes</span>
					</Link>
				</div>
				<button
					className="group z-20 ml-auto flex h-16 w-16 flex-col items-end justify-center hover:bg-gray-800 active:bg-white md:hidden"
					onClick={menuToggle}
				>
					<div className="mx-auto mb-1 h-px w-6 bg-white group-active:bg-black"></div>
					<div className="mx-auto mb-1 h-px w-6 bg-white group-active:bg-black"></div>
					<div className="mx-auto h-px w-6 bg-white group-active:bg-black"></div>
				</button>
			</div>
			<div className="relative left-0 top-0 flex select-none items-center md:z-20">
				<ul
					className={`h-16 w-full items-center transition-all duration-300 ease-in-out max-md:absolute max-md:left-0 max-md:flex-row max-md:drop-shadow-md md:flex
                    ${isMenuOpen ? 'top-0' : 'max-md:-top-[500px]'}
                  `}
				>
					<li className="h-full">
						<Link
							to="/"
							className="flex h-full flex-col justify-center border-solid border-slate-400 px-3 text-center active:bg-slate-500 max-md:border-b max-md:bg-slate-700"
							onClick={menuToggle}
						>
							Home
						</Link>
					</li>
					<li className="h-full">
						<Link
							to="/recipes"
							className="flex h-full flex-col justify-center border-solid border-slate-400 px-3 text-center active:bg-slate-500 max-md:border-b max-md:bg-slate-700"
							onClick={menuToggle}
						>
							View Recipes
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
