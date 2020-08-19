import React from "react";
import logo from "./img.png";

const Sidenav = () => {
	return (
		<div className='sidebar'>
			<div className='logo-container'>
				<div className='logo'>
					<img src={logo} alt='' />
				</div>
			</div>
			<div className='side-items'>
				<div className='side-item'></div>
				<div className='side-item'></div>
				<div className='side-item'></div>
			</div>
			<div className='side-items'>
				<div className='side-item'>
					<div className='sm-icon'>PW</div>
				</div>
				<div className='side-item'>
					<div className='sm-icon'>PW</div>
				</div>
				<div className='side-item'>
					<div className='sm-icon'>LG</div>
				</div>
				<div className='side-item'>
					<div className='sm-icon'>AW</div>
				</div>
				<div className='side-item'>
					<div className='sm-icon'>AW</div>
				</div>
			</div>
		</div>
	);
};

export default Sidenav;
