<script lang="ts">
    import projectData from '$lib/assets/JSON/projects.json';
    import technologies from '$lib/assets/JSON/technologies.json';

    const techIconMap: Record<string, { icon: string; needsBackground?: boolean }> = Object.fromEntries(
        (technologies as Array<{ name: string; icon: string; needsBackground?: boolean }>).map((t) => [t.name, { icon: t.icon, needsBackground: t.needsBackground }])
    );
</script>

<section class="min-h-screen py-25 px-4 ">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h1 class="text-5xl font-bold mb-4 text-white">
                Projects
            </h1>
            <p class="text-gray-500">This is my project showcase.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each projectData as project, index}
                <div 
                    class="group relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                >
                    <div class="relative h-72 overflow-hidden bg-gray-800">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            class="w-full h-full object-cover"
                        />
                    </div>

                    <div class="p-6 bg-gray-800">
                        <div class="flex items-center gap-2 mb-4">
                            {#if project.technologies}
                                {#each project.technologies.slice(0, 10) as tech}
                                    {#if techIconMap[tech]}
                                        <div class="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                                            <img src={techIconMap[tech].icon} alt={tech} class="w-6 h-6 object-contain" />
                                        </div>
                                    {:else}
                                        <div class="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                                            <span class="text-white text-xs font-bold">
                                                {tech.slice(0, 2).toUpperCase()}
                                            </span>
                                        </div>
                                    {/if}
                                {/each}
                            {/if}
                        </div>

                        <h3 class="text-3xl font-bold text-white mb-3">
                            {project.title}
                        </h3>
                        
                        <p class="text-gray-400 text-base">
                            {project.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>

        {#if projectData.length === 0}
            <div class="text-center py-20">
                <div class="text-6xl mb-4">🚀</div>
                <h3 class="text-2xl font-bold text-gray-400 mb-2">No Projects Yet</h3>
                <p class="text-gray-500">Stay tuned for upcoming projects!</p>
            </div>
        {/if}
    </div>
</section>