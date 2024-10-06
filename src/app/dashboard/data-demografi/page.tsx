import { MainLayout } from "@/core";
import dynamic from "next/dynamic";

const PopulationChart = dynamic(
	() => import("@/core/templates/DataDemografi/PopulationChart"),
	{
		ssr: false, // Nonaktifkan server-side rendering untuk komponen ini
	}
);

const AgeDistributionChart = dynamic(
	() => import("@/core/templates/DataDemografi/AgeDistributionChart"),
	{
		ssr: false,
	}
);

const GenderChart = dynamic(
	() => import("@/core/templates/DataDemografi/GenderChart"),
	{
		ssr: false,
	}
);

const EducationChart = dynamic(
	() => import("@/core/templates/DataDemografi/EducationChart"),
	{
		ssr: false,
	}
);

export default function DataDemografiPage() {
	return (
		<MainLayout>
			<section className="flex gap-2 w-full flex-col lg:flex-row md:flex-col">
				<div className="bg-white p-4 w-full rounded-[20px]">
					<PopulationChart />
				</div>
				<div className="bg-white p-4 w-full rounded-[20px]">
					<AgeDistributionChart />
				</div>
			</section>

			<section className="mt-4 flex gap-2 w-full flex-col lg:flex-row md:flex-row">
				<div className="bg-white p-4 w-full rounded-[20px]">
					<EducationChart />
				</div>
				<div className="bg-white p-4 rounded-[20px] w-full lg:w-[25%] md:w-[25%]">
					<GenderChart />
				</div>
			</section>
		</MainLayout>
	);
}
