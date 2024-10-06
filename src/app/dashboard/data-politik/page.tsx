import { Dashboard, DataPolitik, MainLayout } from "@/core";

export default function DataPolitikPage() {
	return (
		<MainLayout>
			<section className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start md:justify-start">
				<Dashboard.SectionCardContent
					title="DPT 2024"
					value="4.088.606"
					className="w-[240px]"
				/>
				<Dashboard.SectionCardContent
					title="VTO Pilkada"
					value="61.68%"
					className="w-[240px]"
				/>
			</section>
			<section className="flex gap-2 mt-4 flex-col lg:flex-row md:flex-row">
				<section className="bg-white p-4 w-full lg:w-[75%] md:w-[75%] rounded-md">
					<DataPolitik.AreaChart />
				</section>
				<section className="bg-white p-4 w-full lg:w-[25%] md:w-[25%] rounded-md">
					<DataPolitik.PieChart />
				</section>
			</section>

			<section className="flex flex-wrap gap-2 justify-center lg:justify-start md:justify-start mt-12">
				<Dashboard.SectionCardContent
					title="Partisipasi Pemilih"
					value="2.521.852"
					className="w-[240px]"
				/>
				<Dashboard.SectionCardContent
					title="Target Suara"
					value="1.263.447"
					className="w-[240px]"
				/>
			</section>
			<section className="flex gap-2 mt-4 flex-col lg:flex-row md:flex-row">
				<section className="bg-white p-4 w-full lg:w-[75%] md:w-[75%] rounded-md">
					<DataPolitik.AreaChart />
				</section>
				<section className="bg-white p-4 w-full lg:w-[25%] md:w-[25%] rounded-md">
					<DataPolitik.PieChart />
				</section>
			</section>

			<section className="flex flex-wrap gap-2 justify-center lg:justify-start md:justify-start mt-12">
				<Dashboard.SectionCardContent
					title="Target"
					value="50.1%"
					className="w-[240px]"
				/>
				<Dashboard.SectionCardContent
					title="Potensi Elektoral"
					value="699.315"
					className="w-[240px]"
				/>
			</section>
			<section className="flex gap-2 mt-4 flex-col lg:flex-row md:flex-row">
				<section className="bg-white p-4 w-full lg:w-[75%] md:w-[75%] rounded-md">
					<DataPolitik.AreaChart />
				</section>
				<section className="bg-white p-4 w-full lg:w-[25%] md:w-[25%] rounded-md">
					<DataPolitik.PieChart />
				</section>
			</section>
		</MainLayout>
	);
}
