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

const BarChart: React.FC = () => {
	// Data untuk Bar Chart
	const data = {
		labels: ["18-25", "26-35", "36-45", "46-55", "56-65", "66+"],
		datasets: [
			{
				label: "Jumlah DPT",
				data: [1200, 1500, 900, 700, 600, 300], // Ganti data sesuai kebutuhan
				backgroundColor: "rgba(75, 192, 192, 0.6)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
			},
		],
	};

	const options: ChartOptions<"bar"> = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const, // Gunakan 'as const' untuk memastikan tipe yang tepat
			},
			title: {
				display: true,
				text: "Jumlah DPT berdasarkan Kelompok Usia (2024)",
			},
		},
	};

	return <Bar className="w-full" data={data} options={options} />;
};

export default BarChart;
