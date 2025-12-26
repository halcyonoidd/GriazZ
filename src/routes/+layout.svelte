<script lang="ts">
    import logo from '$lib/assets/GriazZ.jpeg';
    import '../app.css';
    import Particles from '$lib/assets/components/Particles.svelte';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={logo} />
</svelte:head>

<section>

<div id="navSection" class="fixed top-0 left-0 right-0 z-50 bg-[#050A18]/70 backdrop-blur-md border-b border-white/5">
    <nav class="px-6 py-4">
        <div class="mx-auto flex max-w-7xl items-center">
            <div class="flex w-full justify-between items-center">
                
                <a href="/" class="flex items-center gap-2">
                    <img src={logo} alt="GriazZ Logo" class="h-10 w-auto rounded shadow" />
                </a>
                <ul class="flex flex-row flex-wrap gap-2 md:flex-row md:space-x-8 md:gap-0 items-center" id="navMenu">
                    <li>
                        <a href="/about" class="inline-block text-sm font-medium text-gray-300 hover:text-red-500 transition-colors duration-300 py-1 px-2">About</a>
                    </li>
                    <li>
                        <a href="/project" class="inline-block text-sm font-medium text-gray-300 hover:text-red-500 transition-colors duration-300 py-1 px-2">Project</a>
                    </li>
                    <li>
                        <a href="/contact" class="inline-block text-sm font-medium text-gray-300 hover:text-red-500 transition-colors duration-300 py-1 px-2">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>



<main class="flex-1">
    <Particles className="fixed inset-0 -z-10 pointer-events-none" quantity={1000} staticity={20} ease={20} size={1} color="#ff0000" vx={0.02} vy={0.02} />
    {@render children()}
</main>

<footer class="mt-4 p-4 text-center" style="background-color: #050A18; border-top: 1px solid rgba(255, 255, 255, 0.05);">
		<p>&copy; 2025 agriazz</p>
</footer>

</section>