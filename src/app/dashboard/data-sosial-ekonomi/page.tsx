import { Dashboard, DataSocialEconomy, MainLayout } from "@/core";
import dynamic from "next/dynamic";

const Maps = dynamic(() => import("@/core/templates/Dashboard/Map/Map"), {
	ssr: false,
});

export default function DataSocialEkonomiPage() {
	return (
		<MainLayout>
			<section className="bg-white p-4 rounded-[20px] w-full z-0">
				<Maps />
			</section>

			<DataSocialEconomy.SectionFilter />
			<section className="mt-4 flex gap-2 justify-center lg:justify-start md:justify-start flex-col lg:flex-row md:flex-row">
				<Dashboard.SectionCardContent
					title="Harga Rata - Rata"
					value="Rp. 28.580"
				/>
				<Dashboard.SectionCardContent
					title="Harga Terendah"
					value="Rp. 15.000"
				/>
				<Dashboard.SectionCardContent
					title="Harga Tertinggi"
					value="Rp. 36.000"
				/>
			</section>

			<DataSocialEconomy.SectionListPrice />
		</MainLayout>
	);
}
