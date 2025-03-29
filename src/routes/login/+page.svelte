<script lang="ts">
	import { title } from '$lib/titleStore';
    import NavBar from '../../components/+NavBar.svelte';
	title.set('Login');
</script>

<NavBar currentPage="login" />