<script lang="ts">
    import projectData from '$lib/assets/JSON/projects.json';
    import technologies from '$lib/assets/JSON/technologies.json';

    const techIconMap: Record<string, { icon: string; needsBackground?: boolean }> = Object.fromEntries(
        (technologies as Array<{ name: string; icon: string; needsBackground?: boolean }>).map((t) => [t.name, { icon: t.icon, needsBackground: t.needsBackground }])
    );

    let selectedProject: (typeof projectData)[number] | null = null;
    let activeGalleryIndex = 0;
    $: galleryImages = selectedProject
        ? (selectedProject.gallery?.length ? selectedProject.gallery : [selectedProject.image])
        : [];
    $: if (selectedProject && activeGalleryIndex >= galleryImages.length) {
        activeGalleryIndex = 0;
    }

    const openProject = (project: (typeof projectData)[number]) => {
        selectedProject = project;
        activeGalleryIndex = 0;
    };

    const closeProject = () => {
        selectedProject = null;
    };
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
                    class="group relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    role="button"
                    tabindex="0"
                    aria-label={`Lihat detail ${project.title}`}
                    on:click={() => openProject(project)}
                    on:keydown={(event) => event.key === 'Enter' && openProject(project)}
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

    {#if selectedProject}
        <div
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            role="button"
            tabindex="0"
            aria-label="Close project details"
            on:click|self={closeProject}
            on:keydown={(event) => event.key === 'Escape' && closeProject()}
        >
            <div class="relative w-full max-w-5xl max-h-[90vh] bg-gray-950/90 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden overflow-y-auto">
                <button
                    class="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                    aria-label="Tutup detail project"
                    on:click={closeProject}
                >
                    X
                </button>

                <div class="relative overflow-hidden">
                    <div class="relative h-72 md:h-96 overflow-hidden">
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            class="w-full h-full object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-3">
                            <p class="text-sm text-gray-300 uppercase tracking-[0.3em]">Highlighted Project</p>
                            <h2 class="text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</h2>
                            {#if selectedProject.technologies?.length}
                                <div class="flex flex-wrap gap-2">
                                    {#each selectedProject.technologies as tech}
                                        <div class="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur rounded-full border border-white/10 text-white text-sm">
                                            {#if techIconMap[tech]}
                                                <img src={techIconMap[tech].icon} alt={tech} class="w-4 h-4 object-contain" />
                                            {/if}
                                            <span>{tech}</span>
                                        </div>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    </div>

                    <div class="grid md:grid-cols-[2fr,1fr] gap-6 p-6 md:p-8 bg-gray-950/90">
                        <div class="space-y-4">
                            <p class="text-sm text-gray-400">Project Overview</p>
                            <p class="text-gray-200 leading-relaxed text-base md:text-lg">
                                {selectedProject.fullDescription}
                            </p>

                            
                        </div>


                        <div class="space-y-3 bg-white/5 border border-white/10 rounded-xl p-4">
                            <div>
                                <p class="text-sm text-gray-400">Tech Stack</p>
                                <div class="flex flex-wrap gap-2">
                                    {#each selectedProject.technologies ?? [] as tech}
                                    <span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-200">{tech}</span>
                                    {/each}
                                </div>
                            </div>
                            {#if selectedProject.link}
                            <div>
                                <p class="text-sm text-gray-400">Primary Link</p>
                                <a class="text-white hover:text-gray-200 underline" href={selectedProject.link} target="_blank" rel="noreferrer">
                                    {selectedProject.link}
                                </a>
                            </div>
                            {/if}
                        </div>

                        {#if selectedProject.link}
                                <a
                                    class="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition w-fit"
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Project
                                    <span aria-hidden="true">→</span>
                                </a>
                            {/if}
                    </div>
                </div>

                {#if galleryImages.length}
                    <div class="p-6 md:p-8 bg-gray-950/90 border-t border-white/5 space-y-4">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-gray-400 uppercase tracking-[0.3em]">Gallery</p>
                                <h3 class="text-xl font-semibold text-white">Project snapshots</h3>
                            </div>
                            <p class="text-sm text-gray-500">{activeGalleryIndex + 1} / {galleryImages.length}</p>
                        </div>

                        <div class="relative w-full overflow-hidden rounded-xl border border-white/10 bg-gray-900">
                            <div class="aspect-[16/9] bg-gray-800">
                                <img
                                    src={galleryImages[activeGalleryIndex]}
                                    alt={`${selectedProject.title} screenshot ${activeGalleryIndex + 1}`}
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {#if galleryImages.length > 1}
                            <div class="flex gap-3 overflow-x-auto pb-1">
                                {#each galleryImages as img, idx}
                                    <button
                                        class={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border transition ${idx === activeGalleryIndex ? 'border-white' : 'border-white/10 hover:border-white/40'}`}
                                        aria-label={`Lihat gambar ${idx + 1}`}
                                        on:click={() => (activeGalleryIndex = idx)}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx + 1}`} class="w-full h-full object-cover" />
                                    </button>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</section>