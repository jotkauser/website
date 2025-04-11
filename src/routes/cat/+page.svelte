<script lang="ts">
	import { title } from '$lib/titleStore';
    import NavBar from '../../components/+NavBar.svelte';
	title.set('Cat');
</script>

<NavBar currentPage="cat" />

<div class="flex flex-col justify-center bg-card p-4 md:p-10 rounded-xl mx-5 sm:mx-auto max-w-3xl md:w-170 gap-2">
	<header>meow</header>
	<p>unfortunately no photos yet. need to take a good one</p>
</div>