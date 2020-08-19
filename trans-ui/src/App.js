import React from "react";
import Header from "./components/layout/Header";
import Sidenav from "./components/layout/Sidenav";
import TransactionCard from "./components/utilities/TransactionCard";
import SummaryCard from "./components/utilities/SummaryCard";

function App() {
	return (
		<div className='container'>
			<Header />
			<Sidenav />
			<div className='inner-container'>
				<div className='trans-container'>
					<TransactionCard />
					<TransactionCard />
					<TransactionCard />
					<TransactionCard />
				</div>
				<div className='overview'>
					<div className='chart-container'></div>
					<div className='summary-container'>
						<SummaryCard />
						<SummaryCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
