<script lang="ts">
	import '../app.css';
	import { title } from '$lib/titleStore';
	import { userStore } from '$lib/auth/userStore';
    import { onMount } from 'svelte';
	let { children } = $props();
	
</script>
<svelte:head>
	<title>{$title} - motylek's website</title>
</svelte:head>
{@render children()}
