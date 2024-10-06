"use client";

import { ImageContants } from "@/constants";
import { ReactNode, useState } from "react";
import { navNavigationData } from "./nav-navigation.data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
	Button,
	Sheet,
	SheetContent,
} from "../components";
import { Menu } from "lucide-react";
import Cookies from "js-cookie";

interface Props {
	children: ReactNode;
}
export const MainLayout = (_props: Props) => {
	const { children } = _props;
	const [openSideBar, setOpenSideBar] = useState(false);
	const navigation = useRouter();
	const pathParams = usePathname();
	const onLogout = () => {
		// Remove the token cookie
		Cookies.remove("token");

		// Optionally, navigate the user back to the login or home page
		navigation.push("/auth");
	};

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
					{navNavigationData.map((value) => {
						if (value.url !== "/keluar") {
							return (
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
							);
						}

						return (
							<li
								onClick={() => onLogout()}
								className={
									value.url === pathParams
										? $activeLinkStyle
										: $unActiveLinkStyle
								}
							>
								{value.icon}
								{value.title}
							</li>
						);
					})}
				</ul>
			</aside>

			<div className="w-full pl-0 lg:pl-[290px] md:pl-0">
				<div className="pt-6 pb-4 px-4 w-full flex justify-between items-center">
					<div>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
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

					<Button
						onClick={() => setOpenSideBar(!openSideBar)}
						variant="ghost"
						className="block lg:hidden md:block"
					>
						<Menu />
					</Button>
				</div>
				<div className="pb-4 px-4 w-full">{children}</div>
			</div>

			<Sheet
				open={openSideBar}
				onOpenChange={() => setOpenSideBar(!openSideBar)}
			>
				<SheetContent side="left" className="p-0">
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
					{/* <SheetFooter>
						<SheetClose asChild>
							<Button type="submit">Save changes</Button>
						</SheetClose>
					</SheetFooter> */}
				</SheetContent>
			</Sheet>
		</main>
	);
};
