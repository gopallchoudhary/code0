import Link from "next/link";
import { promptTemplateCategories } from "@/components/home/prompt-templates";

const steps = [
	{
		title: "Describe it",
		body: "Type what you want in plain words. Templates help you start fast.",
	},
	{
		title: "Log in to build",
		body: "Your draft is saved automatically. Sign in once, then it builds.",
	},
	{
		title: "Ship it",
		body: "Preview, iterate with prompts, and share your project link.",
	},
];

const stats = [
	{ value: "60s", label: "From prompt to live preview" },
	{ value: "20+", label: "Starter templates included" },
	{ value: "1", label: "Login to build, like Lovable" },
];

export function LandingSections() {
	return (
		<>
			<section id="templates" className="w-full max-w-5xl px-4 pt-24">
				<h2
					className="text-center text-4xl text-[#1c1c1c] sm:text-5xl dark:text-foreground"
					style={{ fontWeight: 600, letterSpacing: "-1.2px", lineHeight: 1 }}
				>
					Start from a template
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-center text-lg text-[#5f5f5d] dark:text-muted-foreground">
					Pick an idea, edit the prompt, then log in to build it.
				</p>
				<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{promptTemplateCategories
						.flatMap((c) => c.templates)
						.slice(0, 6)
						.map((t) => (
							<div
								key={t.label}
								className="rounded-xl border border-[rgba(28,28,28,0.14)] bg-[#fcfbf8] p-6 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] transition-colors hover:border-[rgba(28,28,28,0.28)] dark:border-border dark:bg-card dark:shadow-none"
							>
								<p className="text-xl text-[#1c1c1c] dark:text-foreground">{t.label}</p>
								<p className="mt-2 line-clamp-2 text-sm leading-6 text-[#5f5f5d] dark:text-muted-foreground">
									{t.prompt}
								</p>
							</div>
						))}
				</div>
			</section>

			<section id="how" className="w-full max-w-5xl px-4 pt-32">
				<h2
					className="text-center text-4xl text-[#1c1c1c] sm:text-5xl dark:text-foreground"
					style={{ fontWeight: 600, letterSpacing: "-1.2px", lineHeight: 1 }}
				>
					How it works
				</h2>
				<div className="mt-10 grid gap-4 md:grid-cols-3">
					{steps.map((s) => (
						<div
							key={s.title}
							className="rounded-xl border border-[rgba(28,28,28,0.14)] bg-[#fcfbf8] p-6 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] transition-colors hover:border-[rgba(28,28,28,0.28)] dark:border-border dark:bg-card dark:shadow-none"
						>
							<p className="text-xl text-[#1c1c1c] dark:text-foreground">{s.title}</p>
							<p className="mt-2 text-base leading-6 text-[#5f5f5d] dark:text-muted-foreground">{s.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className="w-full max-w-5xl px-4 pt-32">
				<div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
					{stats.map((s) => (
						<div key={s.label} className="flex-1 text-center">
							<p
								className="text-5xl text-[#1c1c1c] dark:text-foreground"
								style={{ fontWeight: 600, letterSpacing: "-1.2px" }}
							>
								{s.value}
							</p>
							<p className="mt-2 text-base text-[#5f5f5d] dark:text-muted-foreground">{s.label}</p>
						</div>
					))}
				</div>
			</section>

			<footer className="mt-32 w-full max-w-5xl px-4 pb-10">
				<div className="rounded-2xl border border-[rgba(28,28,28,0.14)] bg-[#fcfbf8] px-8 py-10 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] dark:border-border dark:bg-card dark:shadow-none">
					<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
						<p className="text-base text-[#1c1c1c] dark:text-foreground">Code0 — prompt to app</p>
						<div className="flex gap-6 text-sm text-[#1c1c1c] dark:text-foreground">
							<a href="#templates" className="underline underline-offset-4">
								Templates
							</a>
							<Link href="/sign-in" className="underline underline-offset-4">
								Log in
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
