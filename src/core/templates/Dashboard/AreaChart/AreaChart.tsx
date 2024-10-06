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
	Filler,
	Legend
);

const AreaChart = () => {
	// Data untuk chart
	const data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Bawang",
				data: [65, 59, 80, 81, 56, 55, 40],
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
		},
	};

	return <Line data={data} options={options} />;
};

export default AreaChart;
