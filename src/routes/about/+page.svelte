<script>
	import Header from '$lib/components/header.svelte';
	import Goback from '$lib/components/goback.svelte';
	import { about_text } from '$lib/paraglide/messages';
</script>

<div class="centered">
	<Header />
	<column>
		<Goback />
		<span style="white-space: pre-line;">{about_text()}</span>
	</column>
</div>
