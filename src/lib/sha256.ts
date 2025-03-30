import { createHash } from "crypto";
export default function sha256(str: string) {
	return createHash('sha256').update(str).digest('hex');
}