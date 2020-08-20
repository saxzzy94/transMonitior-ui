import React from "react";
import { Line } from "react-chartjs-2";

const data = {
	labels: [
		"January",
		"Feburary",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"Novemer",
		"December",
	],
	datasets: [
		{
			data: [564, 854, 651, 35461, 5645, 21, 9, 6659, 156, 1551],
		},
	],
};

const Chart = () => {
	return (
		<div className='chart'>
			<Line
				data={data}
				width={100}
				height={1000}
				options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};

export default Chart;
