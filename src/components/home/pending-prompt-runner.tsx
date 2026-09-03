"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import { useCreateProject } from "@/features/projects/hooks/projects";
import { PENDING_PROMPT_KEY } from "@/lib/pending-prompt";

export function PendingPromptRunner() {
	const router = useRouter();
	const { isSignedIn, isLoaded } = useAuth();
	const { mutate: createProject } = useCreateProject();
	const ran = useRef(false);

	useEffect(() => {
		if (!isLoaded || !isSignedIn || ran.current) return;
		let pending: string | null = null;
		try {
			pending = sessionStorage.getItem(PENDING_PROMPT_KEY);
		} catch {
			pending = null;
		}
		if (!pending?.trim()) return;
		ran.current = true;
		try {
			sessionStorage.removeItem(PENDING_PROMPT_KEY);
		} catch {
			/* noop */
		}
		createProject(pending, {
			onSuccess: (project) => {
				router.push(`/projects/${project.id}`);
			},
			onError: (error) => {
				toast.error(error.message);
			},
		});
	}, [isLoaded, isSignedIn, createProject, router]);

	return null;
}
