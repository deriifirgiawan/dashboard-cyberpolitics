"use client";

// components/GenderChart.tsx

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const GenderChart: React.FC = () => {
	const data = {
		labels: ["Laki-laki", "Perempuan"],
		datasets: [
			{
				label: "Jenis Kelamin",
				data: [520000, 480000], // contoh data laki-laki dan perempuan
				backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
				borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
		],
	};

	return <Pie data={data} options={{ responsive: true }} />;
};

export default GenderChart;
