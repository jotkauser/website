<script lang="ts">
	import { title } from '$lib/titleStore';
    import NavBar from '../../components/+NavBar.svelte';
	title.set('About me');
</script>

<NavBar currentPage="about" />

<div class="flex flex-col gap-5">
	<div class="flex flex-col justify-center bg-card p-4 md:p-10 rounded-xl mx-5 sm:mx-auto max-w-3xl md:w-170 gap-2">
		<header>about me</header>
		<p>hi! i'm motylek and i live in Poland. I like programming, playing video games and everything else that's related to tech.</p>
		<p>I have a cat, but I still haven't chosen a name for him, even though I've had him for a long time.</p>
		<p>I use a Xiaomi Mi 11 as my daily driver phone and a Xiaomi Mi 9 as a second phone.</p>
	</div>
	
	<div class="flex flex-col justify-center bg-card p-4 md:p-10 rounded-xl mx-5 sm:mx-auto max-w-3xl text-white md:w-170">
		<header>devices that i own</header>
		
		<p>phones:</p>
		<ul>
			<li>Xiaomi Mi 11 (8/256)</li>
			<li>Xiaomi Mi 9 (6/128)</li>
			<li>Another Mi 9 (6/128) (parts)</li>
			<li>Samsung Galaxy A52 (6/128)</li>
			<li>Xiaomi Redmi Note 5 Pro (4/64)</li>
			<li>Samsung Galaxy A5 (2017) (3/32)</li>
			<li>Samsung Galaxy S7 edge (4/32) (broken)</li>
			<li>Apple iPhone 6s (2/32)</li>
			<li>Huawei y6 (broken)</li>
			<li>Sony Xperia SP (1/8)</li>
			<li>Samsung Omnia II</li>
			<li>Nokia 500</li>
			<li>Some Siemens phone</li>
			<li>Nokia 6500c</li>
			<li>Nokia 6310i</li>
		</ul>
		<p>maybe i missed something, idk</p>
		
		<p>laptops:</p>
		<ul>
			<li>ASUS ROG Strix G15 (G513IC) (daily driver)</li>
			<li>Dell Inspiron 3542</li>
			<li>Lenovo IdeaPad 520-15IKB (Hackintosh laptop)</li>
			<li>HP Pavilion DV6 (Intel Pentium) (unused)</li>
		</ul>

		<p>computers:</p>
		<ul>
			<li>Athlon 64 5600 Dual-Core, 4GB RAM, GeForce 9800GT</li>
			<li>Core 2 Quad Q8200, 2GB RAM, GT710</li>
			<li>Some 486 PC that i don't know the exact specs</li>
		</ul>
	</div>
</div>