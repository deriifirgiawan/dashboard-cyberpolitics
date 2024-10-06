import {
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/core/components";

export const SectionActivity = () => {
	const listActivity = [
		{
			name: "Bagi - Bagi Beras Bulog",
			progress: "20%",
			quantity: 1000,
			date: "7 Nov 2024",
		},
		{
			name: "Bagi - Bagi Karung",
			progress: "80%",
			quantity: 1000,
			date: "7 Nov 2024",
		},
		{
			name: "Bagi - Bagi Sampah",
			progress: "10%",
			quantity: 1000,
			date: "7 Nov 2024",
		},
		{
			name: "Bagi - Bagi Rumah",
			progress: "0",
			quantity: 1000,
			date: "7 Nov 2024",
		},
	];
	return (
		<section className="p-4 bg-white w-full rounded-[20px]">
			<h5 className="text-2xl font-bold">Kegiatan</h5>

			<Table className="mt-4">
				<TableHeader>
					<TableRow>
						<TableHead>Nama</TableHead>
						<TableHead>Progress</TableHead>
						<TableHead>Quantity</TableHead>
						<TableHead className="text-right">Date</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{listActivity.map((value) => (
						<TableRow key={value.name}>
							<TableCell className="font-medium flex items-center gap-2">
								<Checkbox />
								{value.name}
							</TableCell>
							<TableCell>{value.progress}</TableCell>
							<TableCell>{value.quantity}</TableCell>
							<TableCell className="text-right">{value.date}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
};
