import { Dashboard, MainLayout } from "@/core";
import dynamic from "next/dynamic";

const BarChart = dynamic(
	() => import("@/core/templates/Dashboard/BarChart/BarChart"),
	{
		ssr: false,
	}
);

const PieChart = dynamic(
	() => import("@/core/templates/DataPolitik/PieChart/PieCharts"),
	{
		ssr: false,
	}
);
const ProgressBar = dynamic(
	() => import("@/core/templates/Dashboard/ProgressBar/ProgressBar"),
	{
		ssr: false,
	}
);

export default function Home() {
	return (
		<MainLayout>
			<section className="mt-4 flex gap-2 justify-center lg:justify-start md:justify-start flex-col lg:flex-row md:flex-row">
				<Dashboard.SectionCardContent title="DPT 2024" value="4.088.606" />
				<Dashboard.SectionCardContent title="VTO Pilkada" value="61.68%" />
				<Dashboard.SectionCardContent
					title="Partisipasi Pemilih"
					value="2.521.852"
				/>
				<Dashboard.SectionCardContent title="Target Suara" value="1.263.447" />
			</section>

			<section className="mt-2 flex gap-2 justify-center lg:justify-start md:justify-start flex-col lg:flex-row md:flex-row">
				<Dashboard.SectionCardContent title="Target" value="50.1%" />
				<Dashboard.SectionCardContent
					title="Potensi Elektoral"
					value="699.315"
				/>
				<Dashboard.SectionCardContent
					title="Kekurangan Suara"
					value="570.465"
				/>
			</section>

			<section className="flex gap-2 w-full flex-col lg:flex-row md:flex-row">
				<section className="mt-4 bg-white p-4 rounded-[20px] w-full">
					<BarChart />
				</section>

				<section className="mt-4 bg-white p-4 rounded-[20px] w-full lg:w-[25%] md:w-[25%]">
					<PieChart />
				</section>
			</section>

			<section className="mt-4 flex gap-2 flex-col lg:flex-row md:flex-row">
				<Dashboard.SectionActivity />
				<section className="bg-white p-4 rounded-[20px] w-full">
					<h5 className="text-2xl font-bold mb-4">Progress Kegiatan</h5>
					<ProgressBar />
				</section>
			</section>

			<Dashboard.SectionVolunteers />
		</MainLayout>
	);
}
