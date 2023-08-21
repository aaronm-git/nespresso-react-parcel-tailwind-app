import React, { useState, useEffect, useRef } from 'react';

function Select({ children, name }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');
	const optionsRef = useRef([]);
	const hiddenEl = useRef(null);
	const selectRef = useRef(null); // Reference to the custom select div

	// Effect to collect option data from children
	useEffect(() => {
		const newOptions = React.Children.map(children, (child) => ({
			label: child.props.label,
			value: child.props.value,
		}));
		optionsRef.current = newOptions;
		setSelectedOption(newOptions[0] ? newOptions[0].label : ''); // Set the default selection
	}, [children]);

	// Close the dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (selectRef.current && !selectRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Function to toggle the dropdown
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Function to handle option selection
	const handleOptionSelect = (option) => {
		setSelectedOption(option.label);
		toggleDropdown();
		hiddenEl.current.value = option.value;
	};

	return (
		<div ref={selectRef} className="custom-select relative" onClick={toggleDropdown}>
			<div className="relative h-full select-none after:absolute after:right-0 after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:select-none after:bg-svg-chevron-down after:bg-contain after:bg-no-repeat after:content-['']">
				{selectedOption}
			</div>
			{isOpen && (
				<ul className="absolute left-0 top-11 z-10 w-full overflow-hidden rounded border border-gray-300 shadow">
					{optionsRef.current.map((option, index) => (
						<li
							className="select-none border-b bg-white p-1 px-4 py-2 hover:bg-nespresso-gold hover:text-white"
							key={index}
							onClick={() => handleOptionSelect(option)}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
			<select className="hidden" name={name} ref={hiddenEl}>
				{optionsRef.current.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}

function Option({ children, value }) {
	return (
		<div label={children} value={value}>
			{children}
		</div>
	);
}

Select.Option = Option;
export default Select;
