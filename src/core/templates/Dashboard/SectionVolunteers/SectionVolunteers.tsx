import { CardVolunteers } from "../CardVolunteers";

export const SectionVolunteers = () => {
	const listVolunteers = [
		{
			id: 1,
			name: "Udin Warkonah",
			position: "Ketua Kordinator",
		},
		{
			id: 2,
			name: "Juki Marzuki",
			position: "Kordinator Kelurahan",
		},
		{
			id: 3,
			name: "Marti Suep",
			position: "Kordinator Kecamatan",
		},
	];
	return (
		<section className="mt-4 p-4 bg-white rounded-[20px] w-full">
			<h5 className="text-2xl font-bold">Relawan</h5>

			<div className="mt-4">
				{listVolunteers.map((value) => (
					<div key={value.id} className="w-full mb-4">
						<CardVolunteers name={value.name} position={value.position} />
					</div>
				))}
			</div>
		</section>
	);
};
