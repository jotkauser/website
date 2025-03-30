import dotenv from 'dotenv';
import type { LayoutServerLoad, RequestEvent } from './$types';
import validateSession from '$lib/auth/validateSession';
dotenv.config();

export const load = async ({ request, cookies }: RequestEvent) => {
	const session = await validateSession(cookies);
	return { session };
}