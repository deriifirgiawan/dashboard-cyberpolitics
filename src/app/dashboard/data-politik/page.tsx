import { Dashboard, DataPolitik, MainLayout } from "@/core";
import dynamic from "next/dynamic";

const PieChart = dynamic(
	() => import("@/core/templates/DataPolitik/PieChart/PieCharts"),
	{
		ssr: false,
	}
);

export default function DataPolitikPage() {
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

			<section className="flex gap-2 mt-4 flex-col lg:flex-row md:flex-row">
				<section className="bg-white p-4 w-full lg:w-[75%] md:w-[75%] rounded-md">
					<DataPolitik.AreaChart />
				</section>
				<section className="bg-white p-4 w-full lg:w-[25%] md:w-[25%] rounded-md">
					<PieChart />
				</section>
			</section>
		</MainLayout>
	);
}
