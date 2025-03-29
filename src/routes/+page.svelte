<script lang="ts">
	import { title } from '$lib/titleStore';
	import { gitRepo, socials } from '../strings';
    import NavBar from '../components/+NavBar.svelte';
	title.set('Home');
</script>

<NavBar currentPage="home" />

<div class="flex flex-col gap-5">
	<div class="flex flex-col justify-center bg-card p-4 md:p-10 rounded-xl mx-5 sm:mx-auto max-w-3xl md:w-170">
		<div>
			<div class="flex flex-col sm:flex-row text-white items-center">
				<img src="/assets/cat.png" alt="cat" class="w-20 h-20 sm:w-30 sm:h-30 rounded-full shadow-xl">
				<div class="flex-col mt-4 sm:mt-0 sm:ml-6 md:ml-10 text-center sm:text-left">
					<h1 class="text-3xl sm:text-5xl">hi! i'm motylek</h1>
					<span class="text-sm sm:text-base">Welcome to my <del>crappy</del> website</span>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col justify-center bg-card p-4 md:p-10 rounded-xl mx-5 sm:mx-auto max-w-3xl text-white md:w-170">
		<h1>what i'm supposed to put here?</h1>
		<h1>idk, check out my <a href="/projects" class="underline">projects</a> or <a href="/blog" class="underline">pseudoblog</a> posts</h1>
		<h1>check out my cat photos <a href="/cat" class="underline">here</a></h1>
		<h1>or check out my <a href="/about" class="underline">about me</a></h1>
	</div>

	<div class="flex flex-col justify-center bg-card p-4 md:p-10 rounded-xl mx-5 sm:mx-auto max-w-3xl text-white md:w-170">
		<div class="flex gap-10 md:gap-25">
			<a href={socials.telegram} target="_blank" rel="noopener noreferrer">
				<img src="/assets/icons/telegram.svg" alt="telegram" class="w-10 h-10">
			</a>
			<a href={socials.github} target="_blank" rel="noopener noreferrer">
				<img src="/assets/icons/github.svg" alt="github" class="w-10 h-10">
			</a>
			<a href={socials.discord} target="_blank" rel="noopener noreferrer">
				<img src="/assets/icons/discord.svg" alt="discord" class="w-10 h-10">
			</a>
			<a href={socials.email} target="_blank" rel="noopener noreferrer">
				<img src="/assets/icons/mail.svg" alt="email" class="w-10 h-10">
			</a>
			<a href={gitRepo} target="_blank" rel="noopener noreferrer">
				<img src="/assets/icons/gitea.svg" alt="git" class="w-10 h-10">
			</a>
		</div>
	</div>
</div>
  