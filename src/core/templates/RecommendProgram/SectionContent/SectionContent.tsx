import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/core/components";

export const SectionContent = () => {
	const programs = [
		{
			id: 1,
			title: "Pengembangan Pariwisata Berkelanjutan",
			description:
				"Sumatera Barat memiliki potensi pariwisata alam dan budaya yang besar, seperti Pantai Padang, Danau Maninjau, dan Lembah Harau. Program ini fokus pada peningkatan infrastruktur, pelatihan masyarakat lokal, dan promosi pariwisata. Langkah-langkah yang dilakukan termasuk: peningkatan infrastruktur pariwisata (jalan, fasilitas umum, transportasi), pelatihan bagi masyarakat lokal untuk menjadi pemandu wisata atau pengelola homestay, serta promosi pariwisata nasional maupun internasional.",
		},
		{
			id: 2,
			title: "Program Ketahanan Pangan",
			description:
				"Pemerintah dapat meluncurkan program untuk mengembangkan pertanian organik, meningkatkan irigasi dan teknologi pertanian modern, serta diversifikasi produk pertanian. Program ini meliputi pengembangan pertanian organik yang berkelanjutan, peningkatan irigasi dan teknologi pertanian modern, serta diversifikasi produk pertanian seperti kopi, kakao, dan hasil hutan lainnya.",
		},
		{
			id: 3,
			title: "Pengembangan UMKM dan Ekonomi Kreatif",
			description:
				"Dukungan terhadap pelaku UMKM dan ekonomi kreatif melalui pelatihan, akses modal, dan digitalisasi UMKM agar lebih dikenal di pasar lokal maupun global. Inisiatif ini mencakup pelatihan manajemen dan akses pasar untuk pelaku UMKM, fasilitasi akses modal melalui program bantuan dana atau kredit usaha rakyat (KUR), serta digitalisasi UMKM dengan membangun platform e-commerce lokal.",
		},
		{
			id: 4,
			title: "Pembangunan Infrastruktur Dasar",
			description:
				"Pembangunan jalan, jembatan, air bersih, sanitasi, listrik, dan internet di wilayah pedesaan dan terpencil untuk mendukung konektivitas dan kesejahteraan masyarakat. Program ini melibatkan pembangunan jalan dan transportasi publik, penyediaan air bersih dan sanitasi di daerah pedalaman, serta pengembangan jaringan listrik dan internet di wilayah terpencil.",
		},
		{
			id: 5,
			title: "Peningkatan Pendidikan dan Pelatihan Vokasi",
			description:
				"Meningkatkan kualitas tenaga kerja lokal melalui pelatihan keterampilan, kemitraan dengan industri, dan pembangunan sekolah vokasional di daerah pedesaan. Program ini meliputi pelatihan keterampilan kerja berbasis teknologi dan industri kreatif, program beasiswa dan kemitraan dengan industri, serta pembangunan sekolah vokasional di daerah pedesaan.",
		},
		{
			id: 6,
			title: "Program Pengembangan Energi Terbarukan",
			description:
				"Memanfaatkan sumber daya alam Sumatera Barat untuk energi terbarukan, seperti pembangkit listrik tenaga air, tenaga surya, dan inisiatif bioenergi. Beberapa langkahnya termasuk pembangunan pembangkit listrik tenaga air (PLTA), pengembangan pembangkit listrik tenaga surya di daerah terpencil, serta inisiatif bioenergi dari limbah pertanian.",
		},
		{
			id: 7,
			title: "Peningkatan Kesehatan Masyarakat",
			description:
				"Meningkatkan kualitas kesehatan masyarakat melalui layanan kesehatan primer, kampanye gizi, dan penyediaan akses kesehatan mental. Program ini melibatkan penguatan layanan kesehatan primer di Puskesmas dan klinik, kampanye gizi dan kesehatan ibu dan anak, serta penyediaan akses kesehatan mental bagi masyarakat.",
		},
	];
	return (
		<section className="w-full bg-white rounded-[20px] p-4">
			<Accordion type="single" collapsible className="w-full">
				{programs.map((value, index) => (
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
