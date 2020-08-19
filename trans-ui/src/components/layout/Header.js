import React from "react";

import search from "../icons/search.svg";

import img from "./img.png";

const header = () => {
	return (
		<header className='nav-header'>
			<div className='nav-bar'>
				<div className='nav-item'>
					<div className='logo-title'>TransMonitor</div>
				</div>
				<div className='nav-item'>
					<img className='icon search' src={search} alt='' />
					<span>Search...</span>
				</div>
			</div>
			<div className='nav-bar '>
				<div className='nav-item'>SUPPORT</div>
				<div className='nav-item'>FAQ</div>
				<div className='nav-item'>
					<i
						class='bell outline icon'
						style={{ color: "#888", fontSize: "14px", padding: "2px" }}
					></i>
				</div>

				<div className='nav-item profile'>
					<div>
						<div>Mark Dawn</div>
						<div>text@text</div>
					</div>
					<img src={img} alt='' width='50px' />
				</div>
			</div>
		</header>
	);
};

export default header;
