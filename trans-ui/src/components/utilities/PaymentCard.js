import React from "react";

const PaymentCard = () => {
	return (
		<div className='payment-container'>
			<div className='header'>
				<div>Item Type</div>
				<div>Price</div>
				<div>Transaction No</div>
				<div>Time</div>
			</div>
			<div className='payment-card'>
				<div className='card-img'>
					<img src='' alt='' />
				</div>{" "}
				<div className='item-title'>Apple Mac Book 15" 250 SSD 12GB</div>
				<div className='item-price'>$7343</div>{" "}
				<div className='item-no'>132423135</div>
				<div className='item-time'>12:34</div>
			</div>
		</div>
	);
};

export default PaymentCard;
