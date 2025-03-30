<script lang="ts">
    import { onMount } from "svelte";

	onMount(async () => {
		await fetch("/api/logout");
		window.location.href = "/";
	});
</script>