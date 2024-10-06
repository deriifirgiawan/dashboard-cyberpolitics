import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/core/components";

export const SectionFilter = () => {
	const listCity = [
		{
			id: 1,
			name: "Kota Padang",
		},
		{
			id: 2,
			name: "Kota Bukittinggi",
		},
		{
			id: 3,
			name: "Kota Padang Panjang",
		},
		{
			id: 4,
			name: "Kota Payakumbuh",
		},
		{
			id: 5,
			name: "Kota Sawahlunto",
		},
	];

	const listData = [
		{
			id: 1,
			name: "Bawang Merah",
		},
		{
			id: 2,
			name: "Bawang Putih",
		},
		{
			id: 3,
			name: "Beras Medium",
		},
		{
			id: 4,
			name: "Beras Premium",
		},
		{
			id: 5,
			name: "Cabai Merah Besar",
		},
		{
			id: 6,
			name: "Cabai Merah Keriting",
		},
		{
			id: 7,
			name: "Cabai Rawit Merah",
		},
		{
			id: 8,
			name: "Daging Ayam Ras",
		},
		{
			id: 9,
			name: "Daging Sapi",
		},
		{
			id: 10,
			name: "Gula Pasir",
		},
	];

	return (
		<section className="mt-4 bg-white w-full z-50 p-4 flex justify-between items-center">
			<div className="flex gap-2">
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Pilih Kota" />
					</SelectTrigger>
					<SelectContent className="bg-white">
						<SelectGroup>
							<SelectLabel>Pilih Kota</SelectLabel>
							{listCity.map((value) => (
								<SelectItem key={value.id} value={value.name}>
									{value.name}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Pilih Bahan Pokok" />
					</SelectTrigger>
					<SelectContent className="bg-white">
						<SelectGroup>
							<SelectLabel>Pilih Bahan Pokok</SelectLabel>
							{listData.map((value) => (
								<SelectItem
									key={`${value.id}--${value.name}`}
									value={value.name}
								>
									{value.name}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</section>
	);
};
