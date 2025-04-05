import dotenv from 'dotenv';
import type { RequestEvent } from '../routes/$types';
import validateSession from '$lib/auth/validateSession';

export const load = async ({ request, cookies }: RequestEvent) => {
	const session = await validateSession(cookies);
	console.log(session)
	return { session };
}