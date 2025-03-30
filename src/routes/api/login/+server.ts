import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import login from "$lib/auth/login";

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { username, password } = await request.json();
	const loginRequest = await login(username, password);
	if (loginRequest?.error) {
		return json({ error: loginRequest?.error }, {status: 401});
	}
	const token = loginRequest?.session?.token!!;
	cookies.set("token", token, {
		path: "/",
		httpOnly: true,
		sameSite: "strict",
		secure: true,
		maxAge: 60 * 60 * 24
	});
	return json({ success: true });
};