<script lang="ts">
	import { title } from '$lib/titleStore';
    import NavBar from '../../components/+NavBar.svelte';
	title.set('Login');
	
	let username = "";
	let password = "";
	let error = "";

	async function handleLogin() {
		const res = await fetch("/api/login", {
			method: "POST",
			body: JSON.stringify({ username, password }),
			headers: { "Content-Type": "application/json" }
		});
		const data = await res.json();
		if (!res.ok) {
			error = data.error;
		} else {
			window.location.href = "/";
		}
	}
</script>

<NavBar currentPage="login" />
<div class="flex flex-col justify-center bg-card p-4 md:p-10 rounded-xl mx-5 sm:mx-auto w-fit gap-2">
	<header class="text-xl font-bold">login</header>
	{#if error}
	<p class="text-red-500">{error}</p>
	{/if}
	<form on:submit|preventDefault={handleLogin} class="flex flex-col gap-2">
	  <input type="username" name="username" placeholder="username" bind:value={username} class="input input-bordered w-full" required />
	  <input type="password" name="password" placeholder="password" bind:value={password} class="input input-bordered w-full" required />
	  <button type="submit" class="btn btn-primary w-full">login</button>
	</form>
  </div>