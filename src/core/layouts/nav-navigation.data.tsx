"use client";
import {
	Box,
	Globe,
	Home,
	LogOut,
	MapPin,
	NotebookText,
	ThumbsUp,
	UsersRound,
} from "lucide-react";

export const navNavigationData = [
	{
		id: 1,
		title: "Dashboard",
		url: "/dashboard",
		icon: <Home className="w-4 h-4" />,
	},
	{
		id: 2,
		title: "Data Politik",
		url: "/dashboard/data-politik",
		icon: <Box className="w-4 h-4" />,
	},
	{
		id: 3,
		title: "Data Sosial Ekonomi",
		url: "/dashboard/data-sosial-ekonomi",
		icon: <NotebookText className="w-4 h-4" />,
	},
	{
		id: 4,
		title: "Data Demografi",
		url: "/dashboard/data-demografi",
		icon: <MapPin className="w-4 h-4" />,
	},
	{
		id: 5,
		title: "Rekomendasi Program",
		url: "/dashboard/rekomendasi-program",
		icon: <ThumbsUp className="w-4 h-4" />,
	},
	{
		id: 6,
		title: "Isu Daerah (Media)",
		url: "/dashboard/isu-daerah",
		icon: <Globe className="w-4 h-4" />,
	},
	{
		id: 7,
		title: "Manajemen Tim Kampanye",
		url: "/dashboard/manajemen-tim-kampanye",
		icon: <UsersRound className="w-4 h-4" />,
	},
	{
		id: 8,
		title: "Keluar",
		url: "/keluar",
		icon: <LogOut className="w-4 h-4" />,
	},
];
