import React, { useState, useEffect, useRef } from 'react';

function Select({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');
	const optionsRef = useRef([]);

	// Effect to collect option labels from children
	useEffect(() => {
		const newOptions = React.Children.map(children, (child) => ({
			label: child.props.label,
			value: child.props.value,
		}));
		optionsRef.current = newOptions;
		setSelectedOption(newOptions[0] ? newOptions[0].label : ''); // Set the default selection
	}, [children]);

	// Function to toggle the dropdown
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Function to handle option selection
	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		toggleDropdown();

		// Update the hidden select input when an option is selected
		const hiddenSelect = document.getElementById('hidden-select');
		if (hiddenSelect) {
			hiddenSelect.value = option;
			hiddenSelect.dispatchEvent(new Event('change', { bubbles: true }));
		}
	};

	return (
		<div className="custom-select relative" onClick={toggleDropdown}>
			<div className="relative h-full select-none after:absolute after:right-0 after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:select-none after:bg-svg-chevron-down after:bg-contain after:bg-no-repeat after:content-['']">
				{selectedOption}
			</div>
			{isOpen && (
				<ul className="absolute left-0 top-11 z-10 w-full overflow-hidden rounded border border-gray-300 shadow">
					{
						// Loop through the options and render them
						optionsRef.current.map((option, index) => (
							<li
								className="select-none border-b bg-white p-1 px-4 py-2 hover:bg-nespresso-gold hover:text-white"
								key={index}
								onClick={() => handleOptionSelect(option.label)}
							>
								{option.label}
							</li>
						))
					}
				</ul>
			)}
			<select className="hidden">
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
		<div value={value} label={label}>
			{children}
		</div>
	);
}

Select.Option = Option;
export default Select;
