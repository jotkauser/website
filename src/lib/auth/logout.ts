import type { Cookies } from "@sveltejs/kit";
import { prisma } from "$lib/prisma";
import { userStore } from "./userStore";
export default async function logout(cookies: Cookies) {
	const token = cookies.get("token");
	if (!token) return;
	await prisma.session.deleteMany({
		where: {
			token
		}
	})
	userStore.set(null);
	cookies.delete("token", {
		path: "/",
		httpOnly: true,
		sameSite: "strict",
		secure: true,
		maxAge: 60 * 60 * 24
	});
}