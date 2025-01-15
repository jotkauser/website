<script>
	import * as m from "$lib/paraglide/messages.js"
	import { gitRepo } from "../../strings";
</script>

<a href="/about">
	<button class="link-button">
		<entry>
			<img class="entry-icon" src="assets/icons/about.svg" alt="abt">
			<span>{m.about_me()}</span>
		</entry>
	</button>
</a>
<a href="/projects">
	<button class="link-button">
		<entry>
			<img class="entry-icon" src="assets/icons/projects.svg" alt="abt">
			<span>{m.projects()}</span>
		</entry>
	</button>
</a>
<a href="{gitRepo}">
	<button class="link-button">
		<entry>
			<img class="entry-icon" src="assets/icons/gitea.svg" alt="abt">
			<span>{m.gitea()}</span>
		</entry>
	</button>
</a>