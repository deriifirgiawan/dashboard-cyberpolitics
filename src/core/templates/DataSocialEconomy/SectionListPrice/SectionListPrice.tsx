import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/core/components";

export const SectionListPrice = () => {
	const listDummyData = [
		{
			id: 1,
			komoditas: "Ikan Kembung",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
		{
			id: 2,
			komoditas: "Minyak Goreng",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
		{
			id: 3,
			komoditas: "Garam Halus Beryoudium",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
		{
			id: 4,
			komoditas: "Tepung terigu",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
		{
			id: 5,
			komoditas: "Telur Ayam",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
		{
			id: 6,
			komoditas: "Daging Ayam",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
		{
			id: 7,
			komoditas: "Gula Merah",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
		{
			id: 8,
			komoditas: "Cabai Merah",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
		{
			id: 9,
			komoditas: "Cabai Hijau",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
		{
			id: 10,
			komoditas: "Cabai Kuning",
			date: "20 Dec 2024",
			price: "35.000",
			het: "0",
			description: "-",
		},
	];
	return (
		<section className="mt-4 bg-white p-4 w-full rounded-[20px]">
			<h5 className="text-2xl font-bold">Harga Komoditas</h5>

			<Table className="mt-4">
				<TableHeader className="bg-cyan-50">
					<TableRow>
						<TableHead className="font-bold text-center">Komoditas</TableHead>
						<TableHead className="font-bold text-center">Tangggal</TableHead>
						<TableHead className="font-bold text-center">Harga(IDR)</TableHead>
						<TableHead className="font-bold text-center">HET(IDR)</TableHead>
						<TableHead className="font-bold text-center">Ket</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{listDummyData.map((value) => (
						<TableRow key={value.komoditas} className="text-center">
							<TableCell className="font-medium">{value.komoditas}</TableCell>
							<TableCell>{value.date}</TableCell>
							<TableCell>{value.price}</TableCell>
							<TableCell>{value.het}</TableCell>
							<TableCell>{value.description}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
};
