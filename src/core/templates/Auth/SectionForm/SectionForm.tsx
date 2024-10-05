import { ImageContants } from "@/constants";
import {
	Button,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	Input,
} from "@/core/components";
import Image from "next/image";

export const SectionForm = () => {
	return (
		<section className="w-full h-screen p-4 flex justify-center items-center flex-col">
			<Image
				src={ImageContants.LOGO_LG}
				alt="CyberPolitics"
				priority
				width={300}
				height={300}
			/>
			<Card className="w-full mt-12">
				<CardHeader>
					<h1 className="text-2xl font-bold">Masuk Dulu</h1>
				</CardHeader>
				<CardContent>
					<Input placeholder="Masukan Email Anda" />
					<Input className="mt-4" placeholder="Masukan Password" />
				</CardContent>

				<CardFooter>
					<Button className="w-full bg-[#47d8e0] hover:bg-[#42c7ce] font-bold text-white">
						Masuk
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
};
