<script lang="ts">
	import { title } from '$lib/titleStore';
    import NavBar from '../../components/+NavBar.svelte';
	import { projects } from '../../strings';
	title.set('Projects');
</script>

<NavBar currentPage="projects" />

<div class="flex flex-col justify-center bg-card p-4 md:p-10 rounded-xl mx-5 sm:mx-auto max-w-3xl md:w-170 gap-2">
	<header>projects</header>
	<ul>
		{#each projects as project}
			<li class="mb-3"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name} {#if project.description} - {project.description}{/if}</a></li>
		{/each}
	</ul>


</div>