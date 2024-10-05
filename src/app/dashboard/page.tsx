import { Dashboard, MainLayout } from "@/core";

export default function Home() {
	return (
		<MainLayout>
			<section className="w-full flex gap-2 flex-col lg:flex-row md:flex-row">
				<Dashboard.CardProfile />
				<Dashboard.CardProfile />
			</section>

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
				<Dashboard.SectionCardContent
					title="Kekurangan Suara"
					value="570.465"
					className="w-[240px]"
				/>
			</section>

			<section className="mt-4 rounded-md bg-white p-4 text-center shadow-sm">
				<h3 className="text-lg font-semibold">
					Monitoring & Evaluasi Tim Kampanye
				</h3>
				<div className="mt-4 flex gap-2 justify-center flex-col lg:flex-row md:flex-row lg:justify-start md:justify-start w-full">
					<Dashboard.SectionCardContent
						title="Target DTD"
						value="0.90%"
						className="bg-secondary text-white"
					/>
					<Dashboard.SectionCardContent
						title="Jumlah DTD"
						value="5"
						className="bg-secondary text-white"
					/>
					<Dashboard.SectionCardContent
						title="Jumlah Kegiatan"
						value="2"
						className="bg-secondary text-white"
					/>
					<Dashboard.SectionCardContent
						title="Jumlah APK"
						value="8"
						className="bg-secondary text-white"
					/>
				</div>
			</section>

			<section className="mt-4 bg-white p-4 rounded-md">
				<Dashboard.Map />
			</section>

			<section className="mt-4 flex gap-2">
				<div className="mt-4 flex gap-2 justify-center flex-col lg:flex-row md:flex-row lg:justify-start md:justify-start w-full">
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
						value="Rp. 36.09"
					/>
				</div>
			</section>

			<section className="mt-4 bg-white p-4 rounded-md">
				<h3 className="text-lg font-semibold text-center">
					Trend Komoditas Bawang Merah
				</h3>
				<Dashboard.AreaChart />
			</section>
		</MainLayout>
	);
}
