"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { ArrowUp, ChevronDown, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { useCreateProject } from "@/features/projects/hooks/projects";
import {
	getRandomPromptTemplate,
	promptTemplateCategories,
} from "@/components/home/prompt-templates";
import { PENDING_PROMPT_KEY } from "@/lib/pending-prompt";

export function LandingPrompt() {
	const [prompt, setPrompt] = useState("");
	const router = useRouter();
	const { isSignedIn } = useAuth();
	const { mutate: createProject, isPending } = useCreateProject();

	function saveDraft(value: string) {
		try {
			sessionStorage.setItem(PENDING_PROMPT_KEY, value);
		} catch {
			/* storage unavailable */
		}
	}

	function handleSubmit() {
		const value = prompt.trim();
		if (!value) return;
		if (!isSignedIn) {
			saveDraft(value);
			toast.message("Log in to build your project", {
				description: "Your idea is saved and will build after sign-in.",
			});
			router.push("/sign-in?redirect_url=/home");
			return;
		}
		createProject(value, {
			onSuccess: (project) => {
				router.push(`/projects/${project.id}`);
			},
			onError: (error) => {
				toast.error(error.message);
			},
		});
	}

	function applySuggestion(nextPrompt: string) {
		setPrompt(nextPrompt);
	}

	return (
		<div className="flex w-full flex-col gap-6">
			<div className="flex h-auto min-h-32 flex-col rounded-2xl border border-[rgba(28,28,28,0.16)] bg-[#fcfbf8] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] focus-within:border-[rgba(28,28,28,0.4)] focus-within:shadow-[rgba(0,0,0,0.1)_0px_4px_12px] dark:border-border dark:bg-card dark:shadow-none">
				<textarea
					value={prompt}
					onChange={(event) => setPrompt(event.target.value)}
					placeholder="Ask Code0 to build..."
					rows={4}
					className="min-h-24 bg-transparent px-4 pt-4 text-base text-[#1c1c1c] outline-none placeholder:text-[#5f5f5d] dark:text-foreground dark:placeholder:text-muted-foreground"
					onKeyDown={(event) => {
						if (event.key === "Enter" && !event.shiftKey) {
							event.preventDefault();
							handleSubmit();
						}
					}}
				/>
				<div className="flex w-full items-center justify-between border-t border-[rgba(28,28,28,0.1)] px-3 py-2 dark:border-border">
					<span className="inline-flex items-center gap-1 rounded-full border border-[rgba(28,28,28,0.4)] px-3 py-1 text-sm text-[#1c1c1c] dark:border-border dark:text-foreground">
						Code0 Max
						<ChevronDown className="size-3 opacity-60" />
					</span>
					<button
						type="button"
						onClick={handleSubmit}
						disabled={!prompt.trim() || isPending}
						aria-label="Submit prompt"
						className="flex size-8 items-center justify-center rounded-full bg-[#1c1c1c] text-[#fcfbf8] transition-opacity active:opacity-80 disabled:opacity-40 dark:bg-primary dark:text-primary-foreground"
						style={{
							boxShadow:
								"rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset",
						}}
					>
						<ArrowUp className="size-4" />
					</button>
				</div>
			</div>
			<div className="flex w-full flex-col gap-5 text-left">
				{promptTemplateCategories.slice(0, 2).map((category) => (
					<div key={category.name} className="flex flex-col gap-2">
						<p className="text-xs font-medium uppercase tracking-wide text-[#5f5f5d] dark:text-muted-foreground">
							{category.name}
						</p>
						<div className="flex flex-wrap gap-2">
							{category.templates.map(({ label, icon: Icon, prompt: templatePrompt }) => (
								<button
									key={label}
									type="button"
									onClick={() => applySuggestion(templatePrompt)}
									className="inline-flex items-center gap-1.5 rounded-full border border-[#eceae4] bg-[#f7f4ed] px-3 py-1.5 text-sm text-[#1c1c1c] transition-colors hover:bg-[rgba(28,28,28,0.04)] dark:border-border dark:bg-card dark:text-foreground dark:hover:bg-muted"
								>
									<Icon className="size-3.5" />
									{label}
								</button>
							))}
						</div>
					</div>
				))}
				<div className="flex justify-center pt-1">
					<button
						type="button"
						onClick={() => setPrompt(getRandomPromptTemplate().prompt)}
						className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-[#5f5f5d] transition-colors hover:bg-[rgba(28,28,28,0.04)] dark:text-muted-foreground dark:hover:bg-muted"
					>
						<RefreshCw className="size-3.5" />
						Random idea
					</button>
				</div>
			</div>
		</div>
	);
}
