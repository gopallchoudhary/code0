import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingPrompt } from "@/components/landing/landing-prompt";
import { LandingSections } from "@/components/landing/landing-sections";

export const metadata: Metadata = {
	title: "Code0 — Turn a prompt into an app",
	description:
		"Describe what you want to build. Log in to generate, preview, and ship your project.",
};

export default async function LandingPage() {
	const { userId } = await auth();
	if (userId) {
		redirect("/home");
	}
	return (
		<div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[#f7f4ed] text-[#1c1c1c] dark:bg-background dark:text-foreground">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden"
			>
				<div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,180,160,0.35),rgba(160,180,255,0.25),transparent)] blur-2xl dark:opacity-40" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,28,28,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,28,28,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_20%,transparent_75%)] dark:opacity-40" />
			</div>
			<LandingNav />
			<main className="relative flex flex-1 flex-col items-center px-4 pt-32">
				<div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
					<h1
						className="text-5xl text-[#1c1c1c] sm:text-6xl dark:text-foreground"
						style={{ fontWeight: 600, lineHeight: 1.05, letterSpacing: "-1.5px" }}
					>
						What do you want to create?
					</h1>
					<p className="max-w-xl text-lg leading-7 text-[#5f5f5d] dark:text-muted-foreground">
						Type an idea below. Explore freely — log in only when you are
						ready to build.
					</p>
					<LandingPrompt />
				</div>
				<LandingSections />
			</main>
		</div>
	);
}
