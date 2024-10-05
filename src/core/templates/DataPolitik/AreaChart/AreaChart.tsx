"use client";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";

// Registrasi komponen yang diperlukan dari Chart.js
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler, // Filler digunakan untuk area chart
	Legend
);

export const AreaChart = () => {
	// Data untuk chart (nilai baru untuk tahun 2024)
	const data = {
		labels: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		datasets: [
			{
				label: "DPT 2024",
				data: [
					300000,
					350000,
					370000,
					400000,
					420000,
					450000,
					410000,
					390000,
					380000,
					410000,
					420000,
					4088606 - 4200000,
				], // Nilai diubah untuk tahun 2024
				fill: true, // Aktifkan area chart (filling)
				backgroundColor: "rgba(75,192,192,0.2)", // Warna area
				borderColor: "rgba(75,192,192,1)", // Warna garis
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

	return <Line data={data} options={options} />;
};
