import { cn } from "@/lib/utils";

/**
 * Props for {@link Chai0Logo}.
 *
 * @property className - Extra classes applied to the wrapper.
 * @property showWordmark - Whether to render the "chai0" text next to the mark.
 */
type Chai0LogoProps = {
	className?: string;
	showWordmark?: boolean;
};

/**
 * The standalone chai0 glyph (SVG mark) without the wordmark.
 *
 * Inherits color via `currentColor` so it adapts to the surrounding text color.
 *
 * @param className - Extra classes applied to the `<svg>` element.
 */
function Chai0Mark({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 64 40"
			fill="none"
			aria-hidden
			className={cn("shrink-0", className)}
		>
			<path
				d="M28 6H14L6 14v12l8 8h14"
				stroke="currentColor"
				strokeWidth="7"
				strokeLinejoin="miter"
				strokeLinecap="butt"
				fill="none"
			/>
			<rect
				x="36"
				y="2.5"
				width="22"
				height="35"
				rx="9"
				stroke="currentColor"
				strokeWidth="7"
				fill="none"
			/>
			<path
				d="M51 6L43 34"
				stroke="currentColor"
				strokeWidth="5"
				strokeLinecap="butt"
			/>
		</svg>
	);
}

/**
 * The chai0 brand logo: the glyph mark plus an optional "chai0" wordmark.
 *
 * @param props - See {@link Chai0LogoProps}.
 */
export function Chai0Logo({ className, showWordmark = true }: Chai0LogoProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-2.5 text-foreground",
				className,
			)}
		>
			<Chai0Mark className="h-5 w-auto" />
			{showWordmark ? (
				<span className="text-base font-semibold tracking-tight"></span>
			) : null}
		</span>
	);
}

export { Chai0Mark, Chai0Logo as Code0Logo, Chai0Mark as Code0Mark };
