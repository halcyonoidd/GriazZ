<script lang="ts">
    import educationData from '$lib/assets/JSON/education.json';
    import organizationData from '$lib/assets/JSON/organization.json';
    import achievementData from '$lib/assets/JSON/achievement.json';

    let activeTab: 'education' | 'organization' | 'achievement' = 'education';

    function changeTab(tab: 'education' | 'organization' | 'achievement') {
        activeTab = tab;
    }
</script>

<section class="py-25 px-4">
    <div id="dataSection" class="max-w-3xl mx-auto mb-16 p-8 bg-gradient-to-br from-red-900/20 to-black/80 backdrop-blur-sm rounded-lg shadow-2xl border border-red-500/30 relative z-10">
        <h2 class="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-cyan-400">About Me</h2>
        <p class="text-gray-100 mb-4 leading-relaxed">
            I'm Agri Azzukhruf, an undergraduate Computer Science student at Universitas Negeri Surabaya with passionate to learn how to create beautiful and functional web applications.
        </p>
        <p class="text-gray-100 mb-8 leading-relaxed">
            I primarily focus on web development especially on frontend development while also contributing to backend development. Feel free to reach out if you'd like to collaborate or just say hi!
        </p>
        <div>
            <a href="/contact" class="inline-block px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transform">
                Contact Me!
            </a>
        </div>
    </div>

    <div id="vision" class="max-w-3xl mx-auto mb-16 p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg shadow-2xl border border-cyan-500/30 relative z-10 group">
        <div class="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">🕷️</div>
        <h3 class="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-500">My Vision</h3>
        <p class="text-gray-100 mb-4 leading-relaxed">
            Just like Miles Morales learning to master his spider abilities, I'm navigating the vast web of IT and software development. From coding algorithms to building responsive interfaces, every debugging session is a training montage, every successful deployment is a victory against bugs and errors.
        </p>
        <p class="text-gray-100 mb-4 leading-relaxed">
            With great technology comes great responsibility - I'm committed to writing clean code, building accessible applications, and creating digital solutions that truly matter. Join me as I swing through APIs, databases, and frameworks in this endless tech universe! 
        </p>
    </div>

    <div id="journeySection" class="max-w-3xl mx-auto bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-gray-700/50 relative z-10">
        <nav class="flex border-b-2 border-red-600/50 bg-black/50">
            <button
                on:click={() => changeTab('education')}
                class="flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 {activeTab === 'education' ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'}"
            >
                Education
            </button>
            <button
                on:click={() => changeTab('organization')}
                class="flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 {activeTab === 'organization' ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'}"
            >
                Organization
            </button>
            <button
                on:click={() => changeTab('achievement')}
                class="flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 {activeTab === 'achievement' ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'}"
            >
                Achievement
            </button>
        </nav>

        <div class="p-8">
            {#if activeTab === 'education'}
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400 mb-4">My Education</h3>
                    {#each educationData as edu}
                        <div class="bg-gray-800/40 p-6 rounded-lg shadow-lg border border-red-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-red-500/20">
                            <h4 class="text-xl font-semibold text-gray-100 mb-2">{edu.institution}</h4>
                            <p class="text-red-400 font-medium mb-1">{edu.degree}</p>
                            <p class="text-sm text-cyan-400 mb-3">{edu.period}</p>
                            <p class="text-gray-300">{edu.description}</p>
                        </div>
                    {/each}
                </div>
            {/if}

            {#if activeTab === 'organization'}
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400 mb-4">My Organizations</h3>
                    {#each organizationData as org}
                        <div class="bg-gray-800/40 p-6 rounded-lg shadow-lg border border-red-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-red-500/20">
                            <h4 class="text-xl font-semibold text-gray-100 mb-2">{org.name}</h4>
                            <p class="text-red-400 font-medium mb-1">{org.role}</p>
                            <p class="text-sm text-cyan-400 mb-3">{org.period}</p>
                            <p class="text-gray-300">{org.description}</p>
                        </div>
                    {/each}
                </div>
            {/if}

            {#if activeTab === 'achievement'}
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400 mb-4">My Achievements</h3>
                    {#each achievementData as achievement}
                        <div class="bg-gray-800/40 p-6 rounded-lg shadow-lg border border-red-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-red-500/20">
                            <h4 class="text-xl font-semibold text-gray-100 mb-2">{achievement.title}</h4>
                            <p class="text-red-400 font-medium mb-1">{achievement.category}</p>
                            <p class="text-sm text-cyan-400 mb-3">{achievement.date}</p>
                            <p class="text-gray-300">{achievement.description}</p>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</section>