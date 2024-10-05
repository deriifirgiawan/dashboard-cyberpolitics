"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrasi komponen yang diperlukan dari Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
	// Data untuk Pie chart
	const data = {
		labels: ["Pria", "Wanita", "Tidak Diketahui"],
		datasets: [
			{
				label: "DPT 2024",
				data: [2000000, 1500000, 1088606], // Contoh pembagian data berdasarkan device
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	// Opsi konfigurasi chart
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "DPT 2024",
			},
		},
	};

	return <Pie data={data} options={options} />;
};
