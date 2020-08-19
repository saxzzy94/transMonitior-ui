import React from "react";
import wallet from "../icons/wallet.svg";
import paper from "../icons/paper.svg";

const Sidenav = () => {
	return (
		<div className='sidebar'>
			<div className='side-container'>
				<div className='side-items'>
					<button className='side-button'>GENERATE INVOICE</button>
					<div className='side-items'>
						<div className='side-heading'>Main</div>
						<div className='side-item'>
							<div className='side-icon'>
								<div className='side-icon'>
									<i class='fas fa-tachometer-alt'></i>
								</div>
							</div>
							<div>Overview</div>
						</div>
					</div>
					<div className='side-items'>
						<div className='side-heading'>Payments</div>
						<div className='side-item'>
							<div className='side-icon'>
								<div className='side-icon'>
									<img src={wallet} alt='' />
								</div>
							</div>
							<div>All payments</div>
						</div>
						<div className='side-item'>
							<div className='side-icon'>
								<img src={wallet} alt='' className='wallet' />
								<i className='far fa-check-circle'></i>
							</div>
							<div>Reconcilled Payments</div>
						</div>
						<div className='side-item'>
							<div className='side-icon'>
								<img src={wallet} alt='' className='wallet' />
								<i className='far fa-times-circle'></i>
							</div>
							<div>Un-Reconcilled Payments</div>
						</div>
						<div className='side-item'>
							<div className='side-icon'>
								<i class='far fa-dot-circle'></i>
							</div>
							<div>Manual Settlement</div>
						</div>
					</div>
					<div className='side-items'>
						<div className='side-heading'>Order</div>
						<div className='side-item'>
							<div className='side-icon'>
								<div className='side-icon'>
									<img src={paper} alt='' />
								</div>
							</div>
							<div>All Orders</div>
						</div>
						<div className='side-item'>
							<div className='side-icon'>
								<img src={paper} alt='' />
								<i class='far fa-pause-circle'></i>
							</div>
							<div>Pending Orders</div>
						</div>
						<div className='side-item'>
							<div className='side-icon'>
								<img src={paper} alt='' />
								<i className='far fa-check-circle'></i>
							</div>
							<div>Reconcilled Orders</div>
						</div>
					</div>
					<div className='side-items'>
						<div className='side-item'>
							<div className='side-icon'>
								<i class='far fa-user'></i>
							</div>
							<div>Merchant Profile</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidenav;
