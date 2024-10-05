import { Card, CardContent } from "@/core/components";

export const CardProfile = () => {
	return (
		<Card className="w-full bg-white border-0 p-0 rounded-lg">
			<CardContent className="p-4 flex gap-4">
				<div>
					<div className="w-[82px] h-[82px] rounded-full bg-slate-300" />
				</div>

				<div className="w-full">
					<h1 className="font-bold text-lg">Calon President</h1>

					<div className="mt-4 w-full flex gap-4 items-center flex-col lg:flex-row md:flex-row">
						<div className="w-full">
							<p className="text-textSecondary font-bold text-sm uppercase">
								Tempat Lahir
							</p>
							<p className="text-textPrimary font-bold text-md uppercase">
								Kota Bekasi
							</p>
						</div>
						<div className="w-full">
							<p className="text-textSecondary font-bold text-sm uppercase">
								Tanggal Lahir
							</p>
							<p className="text-textPrimary font-bold text-md uppercase">
								26 Desember 1989
							</p>
						</div>
					</div>

					<div className="mt-4 w-full flex gap-4 items-center flex-col lg:flex-row md:flex-row">
						<div className="w-full">
							<p className="text-textSecondary font-bold text-sm uppercase">
								Afiliasi
							</p>
							<p className="text-textPrimary font-bold text-md uppercase">-</p>
						</div>
						<div className="w-full">
							<p className="text-textSecondary font-bold text-sm uppercase">
								Jenis Kelamin
							</p>
							<p className="text-textPrimary font-bold text-md uppercase">
								Laki - Laki
							</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
