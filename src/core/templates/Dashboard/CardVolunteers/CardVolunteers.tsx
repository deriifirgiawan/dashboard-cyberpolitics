import { Card, CardContent } from "@/core/components";

interface Props {
	name: string;
	position: string;
}
export const CardVolunteers = (_props: Props) => {
	const { name, position } = _props;
	return (
		<Card className="bg-white shadow-lg rounded-[20px] w-full p-4 border-0">
			<CardContent className="p-0 flex gap-2 items-center">
				<div className="w-[48px] h-[48px] bg-slate-300 rounded-full" />

				<div>
					<p className="text-md font-bold">{name}</p>

					<p className="text-sm font-semibold text-textSecondary">{position}</p>
				</div>
			</CardContent>
		</Card>
	);
};
