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

const EducationChart: React.FC = () => {
	const data = {
		labels: ["Tidak Sekolah", "SD", "SMP", "SMA", "Sarjana"],
		datasets: [
			{
				label: "Tingkat Pendidikan",
				data: [50000, 150000, 200000, 250000, 100000], // contoh data pendidikan
				backgroundColor: "rgba(255, 206, 86, 0.6)",
				borderColor: "rgba(255, 206, 86, 1)",
				borderWidth: 1,
			},
		],
	};

	return <Bar data={data} options={{ responsive: true }} />;
};

export default EducationChart;
