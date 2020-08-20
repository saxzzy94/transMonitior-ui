import React from "react";

const TransactionCard = ({ title, amount }) => {
	return (
		<div className='transaction-card'>
			<div className='transaction-content'>
				<div>{title}</div>
				<h3>{amount}</h3>
			</div>
			<div></div>
		</div>
	);
};

export default TransactionCard;
