import { ImageContants } from "@/constants";

export const Banner = () => {
	return (
		<aside className="bg-slate-500 w-full h-screen hidden lg:block md:block">
			<img
				src={ImageContants.IMAGE_BANNER}
				className="w-full object-cover h-screen"
			/>
		</aside>
	);
};
