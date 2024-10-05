import { Auth } from "@/core";

export default function AuthPage() {
	return (
		<main className="flex justify-between">
			<Auth.Banner />
			<Auth.SectionForm />
		</main>
	);
}
