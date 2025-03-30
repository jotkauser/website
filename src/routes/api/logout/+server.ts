import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import logout from "$lib/auth/logout";

export const GET: RequestHandler = async ({ request, cookies }) => {
	await logout(cookies);
	return json({ success: true });
}