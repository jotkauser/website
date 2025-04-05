<script lang="ts">
	import { title } from '$lib/titleStore';
    import NavBar from '../../../../components/+NavBar.svelte';
	import type { User } from '@prisma/client';
	import { userStore } from '$lib/auth/userStore';
	import { onDestroy } from 'svelte';
	title.set('Pseudoblog');
	let data = $props();
	let user = $userStore;
</script>

<NavBar currentPage="blog" />

<div class="flex flex-col justify-center bg-card p-4 md:p-10 rounded-xl mx-5 sm:mx-auto max-w-3xl md:w-170 gap-2">
	<header>pseudoblog</header>
	{#if user}
		<a href="/blog/edit/{data.postId}" class="underline">edit post</a>
	{/if}
</div>