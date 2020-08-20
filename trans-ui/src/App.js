import React from "react";
import Header from "./components/layout/Header";
import Sidenav from "./components/layout/Sidenav";
import TransactionCard from "./components/utilities/TransactionCard";
import SummaryCard from "./components/utilities/SummaryCard";

import Chart2 from "./components/layout/Chart2";

function App() {
	return (
		<div className='container'>
			<Header />
			<Sidenav />
			<div className='inner-container'>
				<div className='trans-container'>
					<div className='left'>
						<TransactionCard
							title={"Daily Transaction Volume"}
							amount={"2,342"}
						/>
						<TransactionCard
							title={"Daily Transaction Value"}
							amount={"N 4,000,000"}
						/>
					</div>
					<div className='right'>
						<TransactionCard
							title={"Total Transaction Volume"}
							amount={"452,4000"}
						/>
						<TransactionCard
							title={"Daily Transaction Volume"}
							amount={"N 4,000,000"}
						/>
					</div>
				</div>
				<div className='overview'>
					<div className='chart-container'>
						<Chart2 />
					</div>
					<div className='summary-container'>
						<SummaryCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
