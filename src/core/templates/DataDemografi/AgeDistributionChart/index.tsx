"use client";

import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const AgeDistributionChart: React.FC = () => {
	const data = {
		labels: ["0-14", "15-24", "25-54", "55-64", "65+"],
		datasets: [
			{
				label: "Distribusi Usia",
				data: [200000, 150000, 400000, 100000, 50000], // contoh data distribusi usia
				backgroundColor: "rgba(153, 102, 255, 0.6)",
				borderColor: "rgba(153, 102, 255, 1)",
				borderWidth: 1,
			},
		],
	};

	return <Bar data={data} options={{ responsive: true }} />;
};

export default AgeDistributionChart;
