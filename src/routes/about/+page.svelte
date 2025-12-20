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

    <div id="dataSection" class="colorscheme-light max-w-3xl mx-auto mb-16 p-8 bg-slate-50 rounded-lg shadow-md">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">
            I'm Agri Azzukhruf, an undergraduate Computer Science student at Universitas Negeri Surabaya with passionate to learn how to create beautiful and functional web applications.
        </p>
        <p class="text-gray-700 mb-8 leading-relaxed">
            I primarily focus on web development especially on frontend development while also contributing to backend development. Feel free to reach out if you'd like to collaborate or just say hi!
        </p>
        <div>
            <a href="/contact" class="inline-block px-6 py-2 bg-gray-800 text-white rounded hover:bg-red-500 transition-colors duration-300 font-semibold">
                Contact Me!
            </a>
        </div>
    </div>

    <div id="journeySection" class="colorscheme-light max-w-3xl mx-auto bg-slate-50 rounded-lg shadow-md overflow-hidden">
        <nav class="flex border-b border-gray-200 bg-white">
            <button
                on:click={() => changeTab('education')}
                class="flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 {activeTab === 'education' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}"
            >
                Education
            </button>
            <button
                on:click={() => changeTab('organization')}
                class="flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 {activeTab === 'organization' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}"
            >
                Organization
            </button>
            <button
                on:click={() => changeTab('achievement')}
                class="flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 {activeTab === 'achievement' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}"
            >
                Achievement
            </button>
        </nav>

        <div class="p-8">
            {#if activeTab === 'education'}
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">My Education</h3>
                    {#each educationData as edu}
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h4 class="text-xl font-semibold text-gray-800 mb-2">{edu.institution}</h4>
                            <p class="text-gray-600 font-medium mb-1">{edu.degree}</p>
                            <p class="text-sm text-gray-500 mb-3">{edu.period}</p>
                            <p class="text-gray-700">{edu.description}</p>
                        </div>
                    {/each}
                </div>
            {/if}

            {#if activeTab === 'organization'}
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">My Organizations</h3>
                    {#each organizationData as org}
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h4 class="text-xl font-semibold text-gray-800 mb-2">{org.name}</h4>
                            <p class="text-gray-600 font-medium mb-1">{org.role}</p>
                            <p class="text-sm text-gray-500 mb-3">{org.period}</p>
                            <p class="text-gray-700">{org.description}</p>
                        </div>
                    {/each}
                </div>
            {/if}

            {#if activeTab === 'achievement'}
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">My Achievements</h3>
                    {#each achievementData as achievement}
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h4 class="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                            <p class="text-gray-600 font-medium mb-1">{achievement.category}</p>
                            <p class="text-sm text-gray-500 mb-3">{achievement.date}</p>
                            <p class="text-gray-700">{achievement.description}</p>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</section>