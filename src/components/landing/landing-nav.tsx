"use client";

import Link from "next/link";
import { Chai0Logo } from "@/components/brand/chai0-logo";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function LandingNav() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 flex justify-center bg-[#f7f4ed]/90 px-4 pt-4 backdrop-blur-sm dark:bg-background/70">
			<nav className="flex h-12 w-full max-w-3xl items-center justify-between rounded-full border border-[rgba(28,28,28,0.14)] bg-[#fcfbf8] px-4 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] dark:border-border dark:bg-background/70 dark:shadow-none">
				<Link
					href="/"
					className="flex items-center text-[#1c1c1c] dark:text-foreground"
				>
					<Chai0Logo className="gap-2 text-[#1c1c1c] dark:text-foreground" />
				</Link>
				<div className="hidden items-center gap-6 text-sm text-[#1c1c1c] sm:flex dark:text-foreground">
					<Link
						href="#templates"
						className="underline-offset-4 hover:underline"
					>
						Templates
					</Link>
					<Link href="#how" className="underline-offset-4 hover:underline">
						How it works
					</Link>
				</div>
				<div className="flex items-center gap-2">
					<ModeToggle className="h-9 w-9 rounded-full border-[rgba(28,28,28,0.2)] bg-transparent text-[#1c1c1c] hover:bg-[rgba(28,28,28,0.04)] hover:text-[#1c1c1c] dark:border-border dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground" />
					<Link
						href="/sign-in"
						className="inline-flex h-9 items-center rounded-full border border-[rgba(28,28,28,0.2)] bg-transparent px-4 text-sm text-[#1c1c1c] transition-all hover:border-[rgba(28,28,28,0.4)] hover:bg-[rgba(28,28,28,0.04)] active:opacity-80 dark:border-border dark:text-foreground dark:hover:bg-muted"
					>
						Log in
					</Link>
					<Link
						href="/sign-in"
						className="inline-flex h-9 items-center rounded-full bg-[#1c1c1c] px-4 text-sm text-[#fcfbf8] transition-opacity hover:opacity-90 active:opacity-80 dark:bg-primary dark:text-primary-foreground"
						style={{
							boxShadow:
								"rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px",
						}}
					>
						Start building
					</Link>
				</div>
			</nav>
		</header>
	);
}
