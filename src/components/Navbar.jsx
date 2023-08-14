import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'ui/Logo';
export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="fixed top-0 z-10 w-screen bg-black text-white">
			<div className="mx-auto lg:container md:flex md:px-4">
				<div className="relative z-20 mr-auto flex items-center bg-black max-md:px-4">
					<div className="flex flex-shrink-0">
						<Link to="/" className="flex items-center no-underline">
							<Logo small />
							<span className="mx-1.5 mb-1 flex items-center text-2xl font-light text-white">|</span>
							<span className="text-lg uppercase tracking-[4px] text-corn-harvest-700">Recipes</span>
						</Link>
					</div>
					<button
						className="ml-auto flex h-16 w-16 flex-col items-end justify-center transition-colors duration-75 ease-linear md:hidden"
						onClick={menuToggle}
					>
						<div className="mx-auto mb-1 h-px w-6 bg-white"></div>
						<div className="mx-auto mb-1 h-px w-6 bg-white"></div>
						<div className="mx-auto h-px w-6 bg-white"></div>
					</button>
				</div>
				<div className="left-0 top-0 flex select-none items-center">
					<ul
						className={`h-16 w-full items-center transition-all duration-300 ease-in-out max-md:absolute max-md:left-0 max-md:flex-row max-md:drop-shadow-md md:flex
                    ${isMenuOpen ? 'top-16' : 'max-md:-top-[500px]'}
                  `}
					>
						<li className="h-full">
							<Link
								to="/"
								className="flex h-full flex-col justify-center border-solid border-corn-harvest-900 px-3 text-center text-sm text-white no-underline transition-colors duration-100 ease-linear active:bg-corn-harvest-900 max-md:border-b max-md:bg-nespresso-gold active:md:bg-nespresso-gold hover:lg:bg-nespresso-gold"
								onClick={menuToggle}
							>
								Home
							</Link>
						</li>
						<li className="h-full">
							<Link
								to="/recipes"
								className="flex h-full flex-col justify-center border-solid border-corn-harvest-900 px-3 text-center text-sm text-white no-underline transition-colors duration-100 ease-linear active:bg-corn-harvest-900 max-md:border-b max-md:bg-nespresso-gold active:md:bg-nespresso-gold hover:lg:bg-nespresso-gold"
								onClick={menuToggle}
							>
								All Recipes
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
