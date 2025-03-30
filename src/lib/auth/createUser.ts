import { prisma } from "$lib/prisma";
import { hashSync } from "bcryptjs";
export default async function createUser(
	username: string,
	email: string,
	password: string
) {
	const passwordHash = hashSync(password, 10);

	const user = await prisma.user.create({
		data: {
			username,
			email,
			password: passwordHash
		}
	});
	return user;
}