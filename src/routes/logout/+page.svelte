<script lang="ts">
    import { userStore } from "$lib/auth/userStore";
    import { onMount } from "svelte";

	onMount(async () => {
		await fetch("/api/logout");
		window.location.href = "/";
	});
</script>