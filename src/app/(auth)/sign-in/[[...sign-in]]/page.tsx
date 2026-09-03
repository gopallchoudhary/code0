import { SignIn } from "@clerk/nextjs";

export default async function Page({
	searchParams,
}: {
	searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
	const params = (await searchParams) ?? {};
	const raw = params.redirect_url;
	const redirectUrl =
		typeof raw === "string" && raw.startsWith("/") ? raw : "/home";
	return (
		<SignIn forceRedirectUrl={redirectUrl} fallbackRedirectUrl="/home" />
	);
}
