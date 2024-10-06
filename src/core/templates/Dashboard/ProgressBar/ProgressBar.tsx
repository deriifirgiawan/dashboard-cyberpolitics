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
	ChartOptions,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const ProgressBarChart: React.FC = () => {
	// Data untuk Progress Bar
	const data = {
		labels: [
			"Bagi - Bagi Beras Bulog",
			"Bagi - Bagi Karung",
			"Bagi - Bagi Sampah",
			"Bagi - Bagi Rumah",
		],
		datasets: [
			{
				label: "Progress (%)",
				data: [20, 80, 10, 0], // Progress dalam persen
				backgroundColor: "rgba(75, 192, 192, 0.6)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
				barPercentage: 0.5, // Ketebalan batang
			},
		],
	};

	const options: ChartOptions<"bar"> = {
		indexAxis: "y", // Mengatur batang horizontal
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: false,
				text: "Progress Kegiatan",
			},
		},
		scales: {
			x: {
				min: 0,
				max: 100, // Skala dari 0 ke 100%
				title: {
					display: true,
					text: "Persentase (%)",
				},
			},
			y: {
				title: {
					display: true,
					text: "Kegiatan",
				},
			},
		},
	};

	return <Bar data={data} options={options} />;
};

export default ProgressBarChart;
