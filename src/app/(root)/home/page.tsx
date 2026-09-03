import { GlassNavbar } from "@/components/home/glass-navbar";
import { HomeBackground } from "@/components/home/home-background";
import { PromptInput } from "@/components/home/prompt-input";
import { PendingPromptRunner } from "@/components/home/pending-prompt-runner";
import { ProjectGrid } from "@/features/projects/components/project-grid";

export default function HomeDashboard() {
	return (
		<div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
			<HomeBackground />
			<GlassNavbar />
			<PendingPromptRunner />
			<main className="flex flex-1 flex-col items-center px-4 pb-16 pt-28">
				<div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
					<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
						What do you want to create?
					</h1>
					<PromptInput />
				</div>
				<div className="mt-16 w-full max-w-5xl">
					<ProjectGrid />
				</div>
			</main>
		</div>
	);
}
