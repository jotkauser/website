<script lang="ts">
	import { title } from '$lib/titleStore';
    import NavBar from '../../components/+NavBar.svelte';
	title.set('Pseudoblog');
</script>

<NavBar currentPage="blog" />