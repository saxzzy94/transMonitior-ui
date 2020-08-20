import React from "react";

const SummaryCard = () => {
	return (
		<div className='summary-card'>
			<div className='summary-item'>
				<h2>Orders</h2>

				<div className='progress-container'>
					<div
						className='progress-bar'
						style={{ height: "5px", width: "80%" }}
					></div>
				</div>

				<p>
					Pending Orders: <span className='pending'>20</span>
				</p>
				<p>
					Reconcilled Orders: <span className='reconcilled'>80</span>
				</p>
				<p>
					Total Orders: <span className='total '>100</span>
				</p>
			</div>
			<div className='summary-item'>
				<h2>Orders</h2>

				<div className='progress-container'>
					<div
						className='progress-bar'
						style={{ height: "5px", width: "80%" }}
					></div>
				</div>

				<p>
					Un-reconcilled Payments: <span className='pending'>20</span>
				</p>
				<p>
					Reconcilled Payments: <span className='reconcilled'>80</span>
				</p>
				<p>
					Total Payments: <span className='total '>100</span>
				</p>
			</div>
		</div>
	);
};

export default SummaryCard;
