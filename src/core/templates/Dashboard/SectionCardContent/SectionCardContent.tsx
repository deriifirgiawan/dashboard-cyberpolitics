import { Card, CardContent } from "@/core/components";
import { cn } from "@/lib/utils";

interface Props {
	title: string;
	value: string;
	className?: string;
}

export const SectionCardContent = (_props: Props) => {
	const { title, value, className } = _props;
	return (
		<Card className={cn("p-0 bg-white w-full border-0 shadow-sm", className)}>
			<CardContent className="p-4 text-center">
				<p className="font-semibold text-base">{title}</p>
				<h1 className="font-bold text-3xl">{value}</h1>
			</CardContent>
		</Card>
	);
};
