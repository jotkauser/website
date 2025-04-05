export async function load({ params }) {
	const postId = params.post;

	return {
		postId,
		post: null
	}
}