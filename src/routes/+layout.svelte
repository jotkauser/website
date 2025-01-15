<script lang="ts">
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<title>{m.title()}</title>
	<meta name="description" content={m.description()} />
	{@render children()}
</ParaglideJS>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	/>
	<link rel="stylesheet" href="/styles.css" />
</svelte:head>
