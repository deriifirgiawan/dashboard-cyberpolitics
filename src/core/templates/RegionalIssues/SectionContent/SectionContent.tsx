import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/core/components";

export const SectionContent = () => {
	const regionalIssues = [
		{
			id: 1,
			title: "Banjir di Kabupaten Solok Mengakibatkan Kerugian Material",
			description:
				"Curah hujan yang tinggi dalam beberapa minggu terakhir menyebabkan banjir di beberapa daerah di Kabupaten Solok. Kerusakan terjadi di area pemukiman dan pertanian, mengakibatkan kerugian material bagi warga. Pemerintah daerah berupaya menanggulangi bencana dengan menyalurkan bantuan logistik.",
			date: "2024-10-02",
			source: "Media Sumbar Online",
		},
		{
			id: 2,
			title: "Kemacetan di Kota Padang Memburuk di Jam Sibuk",
			description:
				"Kemacetan parah terjadi di beberapa titik pusat kota Padang, terutama pada jam sibuk. Penyebab utama adalah peningkatan jumlah kendaraan yang tidak diimbangi dengan infrastruktur jalan yang memadai. Pemerintah kota berencana untuk membangun jalan alternatif dan memperbaiki manajemen lalu lintas.",
			date: "2024-09-28",
			source: "Padang Daily News",
		},
		{
			id: 3,
			title: "Harga Pangan Naik, Petani di Agam Mengeluh",
			description:
				"Kenaikan harga pangan di pasar lokal menjadi keluhan bagi petani di Agam. Biaya produksi meningkat, namun pendapatan petani tetap stagnan. Pemerintah sedang mempertimbangkan subsidi atau solusi jangka pendek untuk mengatasi masalah ini.",
			date: "2024-09-25",
			source: "Agam Post",
		},
		{
			id: 4,
			title: "Kebakaran Hutan di Bukit Barisan, Warga Diungsikan",
			description:
				"Kebakaran hutan terjadi di kawasan Bukit Barisan, menyebabkan puluhan warga terpaksa diungsikan. Hingga kini, petugas pemadam kebakaran masih berupaya memadamkan api dengan bantuan TNI dan masyarakat setempat. Kerusakan hutan mengancam keanekaragaman hayati di kawasan tersebut.",
			date: "2024-10-01",
			source: "Bukittinggi Herald",
		},
		{
			id: 5,
			title: "Pembangunan Jembatan di Pesisir Selatan Dipercepat",
			description:
				"Pemerintah Kabupaten Pesisir Selatan mempercepat proyek pembangunan jembatan baru untuk meningkatkan akses transportasi antarwilayah. Proyek ini ditargetkan selesai pada awal 2025 dan diharapkan dapat meningkatkan perekonomian lokal dengan mempercepat distribusi barang.",
			date: "2024-09-29",
			source: "Pesisir Selatan News",
		},
		{
			id: 6,
			title: "Kualitas Udara Menurun di Payakumbuh Akibat Asap Kebakaran Hutan",
			description:
				"Kualitas udara di Payakumbuh dilaporkan menurun drastis akibat kabut asap yang disebabkan oleh kebakaran hutan di wilayah sekitarnya. Warga diimbau untuk mengurangi aktivitas di luar ruangan dan menggunakan masker. Pemerintah sedang menyiapkan solusi jangka panjang untuk mengatasi masalah lingkungan ini.",
			date: "2024-09-30",
			source: "Payakumbuh Times",
		},
		{
			id: 7,
			title: "Proyek Pengembangan Wisata Bahari Mentawai Dapat Apresiasi",
			description:
				"Proyek pengembangan wisata bahari di Kepulauan Mentawai mendapatkan apresiasi dari pemerintah pusat. Proyek ini diharapkan dapat meningkatkan kunjungan wisatawan dan mendongkrak perekonomian lokal melalui pariwisata yang berkelanjutan.",
			date: "2024-10-03",
			source: "Mentawai Update",
		},
	];

	return (
		<section className="w-full bg-white rounded-[20px] p-4">
			<Accordion type="single" collapsible className="w-full">
				{regionalIssues.map((value, index) => (
					<AccordionItem key={value.id} value={`item-{${value.id}}`}>
						<AccordionTrigger className="font-bold text-lg">
							{index + 1}. {value.title}
						</AccordionTrigger>
						<AccordionContent>{value.description}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};
