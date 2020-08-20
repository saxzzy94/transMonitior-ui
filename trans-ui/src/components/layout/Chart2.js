import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const Chart2 = () => {
	/* Chart code */
	// Themes begin
	am4core.useTheme(am4themes_animated);
	// Themes end

	// Create chart instance
	let chart = am4core.create("chartdiv", am4charts.XYChart);

	// Add data
	chart.data = [
		{
			date: "2012-01-01",
			value: 53,
		},
		{
			date: "2012-01-02",
			value: 32,
		},
		{
			date: "2012-01-03",
			value: 33,
		},
		{
			date: "2012-01-04",
			value: 40,
		},
		{
			date: "2012-01-05",
			value: 27,
		},
		{
			date: "2012-01-06",
			value: 26,
		},
		{
			date: "2012-01-07",
			value: 18,
		},
		{
			date: "2012-01-08",
			value: 21,
		},
		{
			date: "2012-01-09",
			value: 26,
		},
		{
			date: "2012-01-10",
			value: 24,
		},
		{
			date: "2012-01-11",
			value: 29,
		},
		{
			date: "2012-01-12",
			value: 32,
		},
		{
			date: "2012-01-13",
			value: 18,
		},
		{
			date: "2012-01-14",
			value: 24,
		},
		{
			date: "2012-01-15",
			value: 22,
		},
		{
			date: "2012-01-16",
			value: 18,
		},
		{
			date: "2012-01-17",
			value: 19,
		},
		{
			date: "2012-01-18",
			value: 14,
		},
		{
			date: "2012-01-19",
			value: 15,
		},
		{
			date: "2012-01-20",
			value: 12,
		},
		{
			date: "2012-01-21",
			value: 8,
		},
		{
			date: "2012-01-22",
			value: 9,
		},
		{
			date: "2012-01-23",
			value: 8,
		},
		{
			date: "2012-01-24",
			value: 7,
		},
		{
			date: "2012-01-25",
			value: 5,
		},
		{
			date: "2012-01-26",
			value: 11,
		},
		{
			date: "2012-01-27",
			value: 13,
		},
		{
			date: "2012-01-28",
			value: 18,
		},
		{
			date: "2012-01-29",
			value: 20,
		},
		{
			date: "2012-01-30",
			value: 29,
		},
		{
			date: "2012-01-31",
			value: 33,
		},
		{
			date: "2012-02-01",
			value: 42,
		},
		{
			date: "2012-02-02",
			value: 35,
		},
		{
			date: "2012-02-03",
			value: 31,
		},
		{
			date: "2012-02-04",
			value: 47,
		},
		{
			date: "2012-02-05",
			value: 52,
		},
		{
			date: "2012-02-06",
			value: 46,
		},
		{
			date: "2012-02-07",
			value: 41,
		},
		{
			date: "2012-02-08",
			value: 43,
		},
		{
			date: "2012-02-09",
			value: 40,
		},
		{
			date: "2012-02-10",
			value: 39,
		},
		{
			date: "2012-02-11",
			value: 34,
		},
		{
			date: "2012-02-12",
			value: 29,
		},
		{
			date: "2012-02-13",
			value: 34,
		},
		{
			date: "2012-02-14",
			value: 37,
		},
		{
			date: "2012-02-15",
			value: 42,
		},
		{
			date: "2012-02-16",
			value: 49,
		},
		{
			date: "2012-02-17",
			value: 46,
		},
		{
			date: "2012-02-18",
			value: 47,
		},
		{
			date: "2012-02-19",
			value: 55,
		},
		{
			date: "2012-02-20",
			value: 59,
		},
		{
			date: "2012-02-21",
			value: 58,
		},
		{
			date: "2012-02-22",
			value: 57,
		},
		{
			date: "2012-02-23",
			value: 61,
		},
		{
			date: "2012-02-24",
			value: 59,
		},
		{
			date: "2012-02-25",
			value: 67,
		},
		{
			date: "2012-02-26",
			value: 65,
		},
		{
			date: "2012-02-27",
			value: 61,
		},
		{
			date: "2012-02-28",
			value: 66,
		},
		{
			date: "2012-02-29",
			value: 69,
		},
		{
			date: "2012-02-30",
			value: 71,
		},
		{
			date: "2012-03-01",
			value: 67,
		},
		{
			date: "2012-03-02",
			value: 63,
		},
		{
			date: "2012-03-03",
			value: 46,
		},
		{
			date: "2012-03-04",
			value: 32,
		},
		{
			date: "2012-03-05",
			value: 21,
		},
		{
			date: "2012-03-06",
			value: 18,
		},
		{
			date: "2012-03-07",
			value: 21,
		},
		{
			date: "2012-03-08",
			value: 28,
		},
		{
			date: "2012-03-09",
			value: 27,
		},
		{
			date: "2012-03-10",
			value: 36,
		},
		{
			date: "2012-03-11",
			value: 33,
		},
		{
			date: "2012-03-12",
			value: 31,
		},
		{
			date: "2012-03-13",
			value: 30,
		},
		{
			date: "2012-03-14",
			value: 34,
		},
		{
			date: "2012-03-15",
			value: 38,
		},
		{
			date: "2012-03-16",
			value: 37,
		},
		{
			date: "2012-03-17",
			value: 44,
		},
		{
			date: "2012-03-18",
			value: 49,
		},
		{
			date: "2012-03-19",
			value: 53,
		},
		{
			date: "2012-03-20",
			value: 57,
		},
		{
			date: "2012-03-21",
			value: 60,
		},
		{
			date: "2012-03-22",
			value: 61,
		},
		{
			date: "2012-03-23",
			value: 69,
		},
		{
			date: "2012-03-24",
			value: 67,
		},
		{
			date: "2012-03-25",
			value: 72,
		},
		{
			date: "2012-03-26",
			value: 77,
		},
		{
			date: "2012-03-27",
			value: 75,
		},
		{
			date: "2012-03-28",
			value: 70,
		},
		{
			date: "2012-03-29",
			value: 72,
		},
		{
			date: "2012-03-30",
			value: 70,
		},
		{
			date: "2012-03-31",
			value: 72,
		},
		{
			date: "2012-04-01",
			value: 73,
		},
		{
			date: "2012-04-02",
			value: 67,
		},
		{
			date: "2012-04-03",
			value: 68,
		},
		{
			date: "2012-04-04",
			value: 65,
		},
		{
			date: "2012-04-05",
			value: 71,
		},
		{
			date: "2012-04-06",
			value: 75,
		},
		{
			date: "2012-04-07",
			value: 74,
		},
		{
			date: "2012-04-08",
			value: 71,
		},
		{
			date: "2012-04-09",
			value: 76,
		},
		{
			date: "2012-04-10",
			value: 77,
		},
		{
			date: "2012-04-11",
			value: 61,
		},
		{
			date: "2012-04-12",
			value: 63,
		},
		{
			date: "2012-04-13",
			value: 60,
		},
		{
			date: "2012-04-14",
			value: 61,
		},
		{
			date: "2012-04-15",
			value: 67,
		},
		{
			date: "2012-04-16",
			value: 62,
		},
		{
			date: "2012-04-17",
			value: 66,
		},
		{
			date: "2012-04-18",
			value: 80,
		},
		{
			date: "2012-04-19",
			value: 87,
		},
		{
			date: "2012-04-20",
			value: 83,
		},
		{
			date: "2012-04-21",
			value: 85,
		},
		{
			date: "2012-04-22",
			value: 84,
		},
		{
			date: "2012-04-23",
			value: 82,
		},
		{
			date: "2012-04-24",
			value: 73,
		},
		{
			date: "2012-04-25",
			value: 71,
		},
		{
			date: "2012-04-26",
			value: 75,
		},
		{
			date: "2012-04-27",
			value: 79,
		},
		{
			date: "2012-04-28",
			value: 70,
		},
		{
			date: "2012-04-29",
			value: 73,
		},
		{
			date: "2012-04-30",
			value: 61,
		},
		{
			date: "2012-05-01",
			value: 62,
		},
		{
			date: "2012-05-02",
			value: 66,
		},
		{
			date: "2012-05-03",
			value: 65,
		},
		{
			date: "2012-05-04",
			value: 73,
		},
		{
			date: "2012-05-05",
			value: 79,
		},
		{
			date: "2012-05-06",
			value: 78,
		},
		{
			date: "2012-05-07",
			value: 78,
		},
		{
			date: "2012-05-08",
			value: 78,
		},
		{
			date: "2012-05-09",
			value: 74,
		},
		{
			date: "2012-05-10",
			value: 73,
		},
		{
			date: "2012-05-11",
			value: 75,
		},
		{
			date: "2012-05-12",
			value: 70,
		},
		{
			date: "2012-05-13",
			value: 77,
		},
		{
			date: "2012-05-14",
			value: 67,
		},
		{
			date: "2012-05-15",
			value: 62,
		},
		{
			date: "2012-05-16",
			value: 64,
		},
		{
			date: "2012-05-17",
			value: 61,
		},
		{
			date: "2012-05-18",
			value: 59,
		},
		{
			date: "2012-05-19",
			value: 53,
		},
		{
			date: "2012-05-20",
			value: 54,
		},
		{
			date: "2012-05-21",
			value: 56,
		},
		{
			date: "2012-05-22",
			value: 59,
		},
		{
			date: "2012-05-23",
			value: 58,
		},
		{
			date: "2012-05-24",
			value: 55,
		},
		{
			date: "2012-05-25",
			value: 52,
		},
		{
			date: "2012-05-26",
			value: 54,
		},
		{
			date: "2012-05-27",
			value: 50,
		},
		{
			date: "2012-05-28",
			value: 50,
		},
		{
			date: "2012-05-29",
			value: 51,
		},
		{
			date: "2012-05-30",
			value: 52,
		},
		{
			date: "2012-05-31",
			value: 58,
		},
		{
			date: "2012-06-01",
			value: 62,
		},
		{
			date: "2012-06-02",
			value: 66,
		},
		{
			date: "2012-06-03",
			value: 65,
		},
		{
			date: "2012-06-04",
			value: 73,
		},
		{
			date: "2012-06-05",
			value: 79,
		},
		{
			date: "2012-06-06",
			value: 78,
		},
		{
			date: "2012-06-07",
			value: 78,
		},
		{
			date: "2012-06-08",
			value: 78,
		},
		{
			date: "2012-06-09",
			value: 74,
		},
		{
			date: "2012-06-10",
			value: 73,
		},
		{
			date: "2012-06-11",
			value: 75,
		},
		{
			date: "2012-06-12",
			value: 70,
		},
		{
			date: "2012-06-13",
			value: 77,
		},
		{
			date: "2012-06-14",
			value: 67,
		},
		{
			date: "2012-06-15",
			value: 62,
		},
		{
			date: "2012-06-16",
			value: 64,
		},
		{
			date: "2012-06-17",
			value: 61,
		},
		{
			date: "2012-06-18",
			value: 59,
		},
		{
			date: "2012-06-19",
			value: 53,
		},
		{
			date: "2012-06-20",
			value: 54,
		},
		{
			date: "2012-06-21",
			value: 56,
		},
		{
			date: "2012-06-22",
			value: 59,
		},
		{
			date: "2012-06-23",
			value: 58,
		},
		{
			date: "2012-06-24",
			value: 55,
		},
		{
			date: "2012-06-25",
			value: 52,
		},
		{
			date: "2012-06-26",
			value: 54,
		},
		{
			date: "2012-06-27",
			value: 50,
		},
		{
			date: "2012-06-28",
			value: 56,
		},
		{
			date: "2012-06-29",
			value: 61,
		},
		{
			date: "2012-06-30",
			value: 52,
		},
	];

	// Create axes
	let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
	dateAxis.renderer.grid.template.location = 0;
	dateAxis.renderer.minGridDistance = 60;
	dateAxis.renderer.opposite = true;

	let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

	// Create series
	let series = chart.series.push(new am4charts.LineSeries());
	series.dataFields.valueY = "value";
	series.dataFields.dateX = "date";
	series.strokeWidth = 0;
	series.fillOpacity = 0.5;

	valueAxis.renderer.grid.template.disabled = true;
	valueAxis.renderer.labels.template.disabled = true;

	// Add vertical scrollbar
	// chart.scrollbarY = new am4core.Scrollbar();
	// chart.scrollbarY.marginLeft = 0;

	// Add cursor
	// chart.cursor = new am4charts.XYCursor();
	// chart.cursor.behavior = "zoomY";
	// chart.cursor.lineX.disabled = true;

	return (
		<div>
			<div
				id='chartdiv'
				style={{ width: "100%", height: "300px", background: "white" }}
			></div>
		</div>
	);
};

export default Chart2;
