<script>
	import Header from "$lib/components/header.svelte";
	import Goback from "$lib/components/goback.svelte";
	import { projects } from "../../strings";
</script>

<div class="centered">
	<Header />
	<column>
		<Goback />
		{#each projects as project}
			<project>
				<a href="{project.link}">
					<button class="link-button project">
						<img class="project-icon" src="/assets/icons/github.svg" alt="github">
						<span class="project-name">{project.name}</span>
					</button>
				</a>
			</project>
		{/each}
	</column>
</div>