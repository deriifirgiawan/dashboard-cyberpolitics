"use client";
import { ImageContants } from "@/constants";
import {
	AlertDialog,
	AlertDialogFooter,
	AlertDialogHeader,
	Button,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	Input,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
} from "@/core/components";
import Cookies from "js-cookie";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SectionForm = () => {
	const [payload, setPayload] = useState({
		email: "",
		password: "",
	});
	const navigation = useRouter();
	const [isError, setIsError] = useState(false);

	const onLogin = () => {
		if (
			payload.email === "calonwakanda@mail.com" &&
			payload.password === "qwe123@@"
		) {
			Cookies.set("token", "T0k3N-PuR4-pUR4", { expires: 1, secure: true });

			navigation.push("/dashboard");
		} else {
			setIsError(true);
		}
	};

	return (
		<section className="w-full h-screen p-4 flex justify-center items-center flex-col">
			<AlertDialog open={isError} onOpenChange={() => setIsError(!isError)}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle className="text-error">
							Maaf Terjadi Kesalahan!!!
						</AlertDialogTitle>
						<AlertDialogDescription>
							Email atau Password yang anda masukan salah.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction className="text-white">Oke</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
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
					<Input
						value={payload.email}
						onChange={(event) =>
							setPayload({ ...payload, email: event.target.value })
						}
						placeholder="Masukan Email Anda"
					/>
					<Input
						value={payload.password}
						onChange={(event) =>
							setPayload({ ...payload, password: event.target.value })
						}
						className="mt-4"
						placeholder="Masukan Password"
						type="password"
					/>
				</CardContent>

				<CardFooter>
					<Button
						onClick={onLogin}
						className="w-full bg-[#47d8e0] hover:bg-[#42c7ce] font-bold text-white"
					>
						Masuk
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
};
