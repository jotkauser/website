<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { writable } from "svelte/store";
	import { userStore } from "$lib/auth/userStore";
    import type { User } from "@prisma/client";

	export let currentPage: string;
	const isDropdownOpen = writable(false);
	let dropdown: HTMLDivElement | null = null;
	let allowClick = false;
	let user: User | null;
	const unsubscribe = userStore.subscribe((value) => {
		user = value;
	})
	onMount(() => {
		const handleClickOutside = (event: PointerEvent) => {
			if (dropdown && !dropdown.contains(event.target as Node)) {
				isDropdownOpen.set(false);
			}
		};
		console.log(user)
		document.addEventListener("pointerdown", handleClickOutside);
		return () => {
			document.removeEventListener("pointerdown", handleClickOutside);
		};
	});

	onDestroy(unsubscribe);

	function toggleDropdown() {
		if (allowClick) return;
		allowClick = true;
		setTimeout(() => {
			allowClick = false;
		}, 300);
		isDropdownOpen.set(!$isDropdownOpen);
	}
</script>
<div class="text-white bg-card m-5 p-2 rounded-xl flex gap-5 items-center h-10 shadow-md">
    <h1>motylek's website</h1>

    <div class="hidden md:flex gap-6 flex-row">
        <a href="/" class:selected={currentPage === 'home'}>Home</a>
        <a href="/about" class:selected={currentPage === 'about'}>About me</a>
        <a href="/projects" class:selected={currentPage === 'projects'}>Projects</a>
        <!-- <a href="/blog" class:selected={currentPage === 'blog'}>Pseudoblog</a> -->
        <a href="/cat" class:selected={currentPage === 'cat'}>Meow</a>
    </div>

    <!-- <div class="ml-auto mr-1 hidden md:flex flex-row gap-5">
        {#if user}
			<p>{user?.username}</p>
			<a href="/logout" class:selected={currentPage === 'logout'}>Logout</a>
		{:else}
			<a href="/login" class:selected={currentPage === 'login'}>Login</a>
		{/if}
    </div> -->

    <div class="md:hidden ml-auto relative" bind:this={dropdown}>
        <button on:click={toggleDropdown} class="p-2">
            ☰
        </button>
        {#if $isDropdownOpen}
            <div class="absolute right-0 mt-3 bg-card rounded-lg shadow-lg w-40">
                <a href="/" class="block px-4 py-2">Home</a>
				<a href="/about" class="block px-4 py-2">About me</a>
				<a href="/projects" class="block px-4 py-2">Projects</a>
				<!-- <a href="/blog" class="block px-4 py-2">Pseudoblog</a> -->
                <a href="/cat" class="block px-4 py-2">Meow</a>
				<!-- {#if user}
					<a class="block px-4 py-2" href="/logout" class:selected={currentPage === 'logout'}>Logout</a>
				{:else}
					<a class="block px-4 py-2" href="/login" class:selected={currentPage === 'login'}>Login</a>
				{/if} -->
            </div>
        {/if}
    </div>
</div>