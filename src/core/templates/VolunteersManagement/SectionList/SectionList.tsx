import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/core/components";

export const SectionList = () => {
	const listDummyData = [
		{
			id: 1,
			name: "Udin Supono",
			position: "Ketua Kordinator",
			regional: "",
		},
		{
			id: 2,
			name: "Basir Darat",
			position: "Kordinator Kecamatan",
			regional: "",
		},
		{
			id: 3,
			name: "Joko Tinggkir",
			position: "Kordinator Kelurahan",
			regional: "",
		},
		{
			id: 4,
			name: "Uep Sutinggkir",
			position: "Relawan",
			regional: "",
		},
		{
			id: 5,
			name: "Bekti Suparman",
			position: "Relawan",
			regional: "",
		},
		{
			id: 6,
			name: "Beki Naslihat",
			position: "Relawan",
			regional: "",
		},
		{
			id: 7,
			name: "Tulang",
			position: "Relawan",
			regional: "",
		},
		{
			id: 8,
			name: "Siregar",
			position: "Relawan",
			regional: "",
		},
		{
			id: 9,
			name: "Sutejo",
			position: "Relawan",
			regional: "",
		},
		{
			id: 10,
			name: "Surti",
			position: "Relawan",
			regional: "",
		},
	];
	return (
		<section className="bg-white w-full rounded-[20px] p-4">
			<Table className="mt-4">
				<TableHeader className="bg-cyan-50">
					<TableRow>
						<TableHead className="font-bold text-center">No</TableHead>
						<TableHead className="font-bold text-center">Nama</TableHead>
						<TableHead className="font-bold text-center">Posisi</TableHead>
						<TableHead className="font-bold text-center">Wilayah</TableHead>
						<TableHead className="font-bold text-center">Aksi</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{listDummyData.map((value, index) => (
						<TableRow key={`${value.id}`} className="text-center">
							<TableCell>{index + 1}</TableCell>
							<TableCell className="font-medium">{value.name}</TableCell>
							<TableCell>{value.position}</TableCell>
							<TableCell>{value.regional}</TableCell>
							<TableCell>-</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
};
