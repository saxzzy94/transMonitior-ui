import React from "react";

const SummaryCard = () => {
	return (
		<div className='summary-card'>
			<h2>Orders</h2>

			<div
				className='progress-bar'
				style={{ height: "5px", width: "80%" }}
			></div>

			<p>
				Pending Orders: <span className='pending'>20</span>
			</p>
			<p>
				Reconcilled Orders: <span className='reconciled'>80</span>
			</p>
			<p>
				Total Orders: <span className='total '>100</span>
			</p>
		</div>
	);
};

export default SummaryCard;
