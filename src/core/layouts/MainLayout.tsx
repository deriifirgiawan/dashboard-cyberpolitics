"use client";

import { ImageContants } from "@/constants";
import { ReactNode } from "react";
import { navNavigationData } from "./nav-navigation.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../components";

interface Props {
	children: ReactNode;
}
export const MainLayout = (_props: Props) => {
	const { children } = _props;
	const pathParams = usePathname();

	const $activeLinkStyle =
		"flex gap-2 items-center ml-4 bg-secondary text-white font-semibold cursor-pointer py-4 pl-6 rounded-tl-lg rounded-bl-lg";
	const $unActiveLinkStyle =
		"flex gap-2 items-center ml-4 hover:bg-backgroundPrimary text-textSecondary hover:text-secondary font-semibold cursor-pointer py-4 pl-6";
	return (
		<main className="flex w-full">
			<aside className="fixed bg-white w-[290px] h-screen hidden lg:block md:none shadow-lg">
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

			<div className="w-full pl-0 lg:pl-[290px] md:pl-0">
				<div className="pt-6 pb-4 px-4 w-full">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/components">Components</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>
									{
										navNavigationData.find((item) => item.url === pathParams)
											?.title
									}
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>

					<h1 className="text-2xl font-medium">
						{navNavigationData.find((item) => item.url === pathParams)?.title}
					</h1>
				</div>
				<div className="pb-4 px-4 w-full">{children}</div>
			</div>
		</main>
	);
};
