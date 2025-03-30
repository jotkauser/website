import type { RequestEvent } from "../../routes/$types";
import { jwtVerify } from "jose";
import { prisma } from "$lib/prisma";
import type { Cookies } from "@sveltejs/kit";

interface JwtPayload {
	userid: string;
	username: string
	iat: number;
	exp: number
	iss: string
}


export default async function validateSession(cookies: Cookies) {
	const token = cookies.get("token");
	if (!token) return null;
	const date = new Date();
	const session = await prisma.session.findFirst({
		where: {
			token
		}
	});
	if (session?.expiresAt!! < date) {
		await prisma.session.deleteMany({
			where: {
				token
			}
		})
		return null;
	}
	const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
	const { payload } = await jwtVerify(token, secret) as { payload: JwtPayload };
	const user = await prisma.user.findUnique({
		where: {
			id: payload.userid
		}
	})
	if (!user) return null;
	user.password = "";
	return user;

}

