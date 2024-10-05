"use client";

import { ImageContants } from "@/constants";
import { ReactNode } from "react";
import { navNavigationData } from "./nav-navigation.data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	children: ReactNode;
}
export const MainLayout = (_props: Props) => {
	const { children } = _props;
	const pathParams = usePathname();

	const $activeLinkStyle =
		"flex gap-2 items-center ml-4 hover:bg-backgroundPrimary text-primary hover:text-primary font-semibold cursor-pointer py-4 pl-6";
	const $unActiveLinkStyle =
		"flex gap-2 items-center ml-4 hover:bg-backgroundPrimary text-textSecondary hover:text-primary font-semibold cursor-pointer py-4 pl-6";
	return (
		<main className="flex w-full">
			<aside className="fixed bg-white w-[290px] h-screen hidden lg:block md:block shadow-lg">
				<a
					href="/dashboard"
					className="w-full flex justify-center pt-6 pb-4 px-4"
				>
					<img
						src={ImageContants.LOGO_SM}
						alt="CyberPolitics"
						className="w-[200px]"
					/>
				</a>

				<ul>
					{navNavigationData.map((value) => (
						<Link key={value.id} href={value.url}>
							<li
								className={
									value.url === pathParams
										? $activeLinkStyle
										: $unActiveLinkStyle
								}
							>
								{value.icon}
								{value.title}
							</li>
						</Link>
					))}
				</ul>
			</aside>

			<div className="pl-0 lg:pl-[300px] md:pl-[300px]">{children}</div>
		</main>
	);
};
