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

const PopulationChart: React.FC = () => {
	const data = {
		labels: ["2021", "2022", "2023", "2024"],
		datasets: [
			{
				label: "Populasi Total",
				data: [1000000, 1020000, 1040000, 1055000], // contoh data populasi
				backgroundColor: "rgba(75, 192, 192, 0.6)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
			},
		],
	};

	return <Bar data={data} options={{ responsive: true }} />;
};

export default PopulationChart;
