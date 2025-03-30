import { prisma } from "$lib/prisma";
import { compareSync } from "bcryptjs";
import * as jose from "jose";

export default async function login(
	username: string,
	password: string
) {
	const user = await prisma.user.findUnique({
		where: {
			username
		}
	});
	if (!user) return { error: "Unknown user"};
	const passwordMatch = compareSync(password, user.password);
	if (!passwordMatch) return { error: "Incorrect password"};
	const jwtPayload = {"userid": user.id, "username": user.username};
	const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
	const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
	const jwt = await new jose.SignJWT(jwtPayload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(expirationDate)
		.setIssuer("motylek.ovh")
		.sign(secret);
	const session = await prisma.session.create({
		data: {
			user: {
				connect: {
					id: user.id
				}
			},
			token: jwt,
			expiresAt: expirationDate
		}
	})
	return {
		session,
		error: null
	};
}