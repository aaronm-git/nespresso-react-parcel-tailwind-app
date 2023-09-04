import React, { useState, useEffect, useRef } from 'react';

function Select({ children, name }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');
	const hiddenEl = useRef(null);
	const selectRef = useRef(null);

	useEffect(() => {
		const defaultOption = getDefaultOption(children);
		setSelectedOption(defaultOption.label);
		hiddenEl.current.value = defaultOption.value;
	}, [children]);

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

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionSelect = (option) => {
		setSelectedOption(option.children);
		toggleDropdown();
		hiddenEl.current.value = option.value;
	};

	return (
		<div
			ref={selectRef}
			className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 caret-nespresso-gold data-[isopen=true]:border-transparent data-[isopen=true]:outline-none data-[isopen=true]:ring-2 data-[isopen=true]:ring-nespresso-gold"
			onClick={toggleDropdown}
			data-isopen={isOpen}
		>
			<SelectedOptionDisplay selectedOption={selectedOption} />
			{isOpen && <DropdownList children={children} handleOptionSelect={handleOptionSelect} />}
			{/* Pass the children prop to HiddenSelectInput */}
			<HiddenSelectInput name={name} hiddenEl={hiddenEl} children={children} />
		</div>
	);
}

function SelectedOptionDisplay({ selectedOption }) {
	return (
		<div className="relative h-6 select-none overflow-hidden after:absolute after:right-0 after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:select-none after:bg-svg-chevron-down after:bg-contain after:bg-no-repeat after:content-['']">
			{selectedOption}
		</div>
	);
}

function DropdownList({ children, handleOptionSelect }) {
	return (
		<ul className="absolute left-0 top-11 z-10 w-full overflow-hidden rounded border border-gray-300 shadow">
			{children.map((option, index) => (
				<DropdownItem key={index} option={option.props} handleOptionSelect={handleOptionSelect} />
			))}
		</ul>
	);
}

function DropdownItem({ option, handleOptionSelect }) {
	return (
		<li
			className="select-none border-b bg-white p-1 px-4 py-2 hover:bg-nespresso-gold hover:text-white"
			onClick={() => handleOptionSelect(option)}
		>
			{option.children}
		</li>
	);
}

function HiddenSelectInput({ name, hiddenEl, children }) {
	return (
		<select className="hidden" name={name} ref={hiddenEl}>
			{children?.map((option, index) => (
				<option key={index} value={option.props.value}>
					{option.children}
				</option>
			))}
		</select>
	);
}

function Option({ children, value }) {
	return <div value={value}>{children}</div>;
}

function getDefaultOption(options) {
	if (options && options.length > 0) {
		const firstOption = options[0].props;
		return { label: firstOption.children, value: firstOption.value };
	}
	return { label: '', value: '' };
}

Select.Option = Option;
export default Select;
