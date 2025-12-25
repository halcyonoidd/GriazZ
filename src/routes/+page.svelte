<script lang="ts">
    import technologies from '$lib/assets/JSON/technologies.json';
</script>

<section>
    <div id="mainSection" class="bg-[url('/img/milesMorales.gif')] bg-cover bg-center min-h-screen flex flex-col bg-blend-overlay bg-black/80">
        <main class="flex-grow flex items-center justify-center">
            <div class="text-left text-white px-4 mr-25">
                <h1 class="text-5xl font-bold mb-2 text-left">Agri Azzukhruf</h1>
                    <p class="text-lg text-gray-400 mb-7">Surabaya, Indonesia</p>
                    <p class="text-lg mb-8 max-w-2xl mx-auto text-left">
                        Passionate about crafting intuitive and dynamic web experiences. I focus on building responsive, high-performance websites that bring creative ideas to life.
                    </p>
                    
                <div class="flex justify-start mb-8">
                    <a download="cv-en.pdf" href="/assets/cv/cv-en.pdf" class="text-white underline hover:text-gray-300 transition duration-300 inline-flex ">
                        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Download CV
                    </a>
                </div>


                <div class="flex justify-between items-center">
                    <div>
                        <a href="#dataSection" class=" bg-transparent border-2 border-red-500 hover:bg-red-500 hover:text-white text-white font-semibold py-3 px-6 rounded-lg transition duration-300">Get To Know Me</a>
                        <a href="/contact" class="ml-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition duration-300">Contact Me</a>
                    </div>

                    <div class="flex justify-end">
                        <a href="https://github.com/halcyonoidd" target="_blank" rel="noopener noreferrer" class="group">
                            <img src="/img/github2.png" alt="GitHub" class="w-15 h-15 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg "/>
                        </a>

                        <a href="https://www.linkedin.com/in/agriazzukhruf" target="_blank" rel="noopener noreferrer" class="group">
                            <img src="/img/linkedin.png" alt="LinkedIn" class="w-15 h-15 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg "/>
                        </a>
                    </div>
                </div>
            </div>

            <div class="bg-[url('/img/fotoAgri2.jpg')] bg-cover bg-center bg-black/60 hidden md:block w-1/3 h-96 rounded-lg mr-10 hover:rotate-0 hover:scale-105 transition-all duration-500"></div>
        </main>
    </div>







    <div id="dataSection" class="py-45 relative overflow-hidden">
        <div class="absolute inset-0 -z-10">
            <div class="absolute top-50 left-20 w-96 h-96 bg-gradient-to-br from-red-600/25 to-red-800/15 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-blue-600/25 to-blue-800/15 rounded-full blur-3xl"></div>

            <img src="/img/spiderweb2.png" alt="web kanan" class="absolute top-30 right-5 w-80 h-80 opacity-[0.3] rotate-12 animate-pulse pointer-events-none" style="animation-delay: 1s" />
            <img src="/img/spiderweb2.png" alt="web kiri" class="absolute top-60 left-2 w-72 h-72 opacity-[0.3] rotate-12 animate-pulse pointer-events-none" style="animation-delay: 1s" />


            <img src="/img/spider3.png" alt="spider kanan" class="absolute top-80 right-10 w-80 h-80 rotate-12 animate-pulse pointer-events-none" style="animation-delay: 1s" />
            <img src="/img/spider3.png" alt="spider kiri" class="absolute top-80 left-20 w-72 h-72 rotate-45 animate-pulse pointer-events-none" style="animation-delay: 1s" />
            <img src="/img/spider3.png" alt="spider kiri" class="absolute bottom-20 left-10 w-96 h-96 -rotate-6 animate-pulse pointer-events-none" style="animation-delay: 1s" />
        </div>
        
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="relative h-96 max-w-md mx-auto md:mx-0">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-2 z-20 
                                hover:rotate-0 hover:scale-105 transition-all duration-500">
                        <div class="absolute inset-0 rounded-3xl"></div>
                        <img src="/img/fotoAgri.jpg" 
                             alt="Agri Azzukhruf" 
                             class="relative w-48 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/10">
                    </div>
                    
                    <div class="absolute top-8 right-4 rotate-6 z-10
                                hover:rotate-3 hover:scale-105 transition-all duration-500">
                        <div class="absolute inset-0 rounded-3xl"></div>
                        <img src="/img/fotoAgri5.jpeg" 
                             alt="Agri Azzukhruf" 
                             class="relative w-32 h-40 object-cover rounded-xl shadow-2xl border-4 border-white/10">
                    </div>

                    <div class="absolute bottom-4 left-8 -rotate-6 z-10
                                hover:-rotate-3 hover:scale-105 transition-all duration-500">
                        <div class="absolute inset-0 rounded-3xl"></div>
                        <img src="/img/fotoAgri3.jpg" 
                             alt="Agri Azzukhruf" 
                             class="relative w-36 h-44 object-cover rounded-xl shadow-2xl border-4 border-white/10">
                    </div>
                </div>
                
                <div class="space-y-6">
                    <h2 class="text-4xl font-bold mb-8">WHO AM I ?</h2>
                    
                    <div class="space-y-4 text-sm md:text-lg leading-relaxed font-light text-gray-300 mb-10">
                        <p>I'm an undergraduate Computer Science student at Universitas Negeri Surabaya.</p>
                        <p>Programming is my passion, that's the reason I am working at the time of my academic career.</p>
                        <p>I like to play games and watch movies/series in my leisure time which is kinda fun and relaxing!</p>
                        <p>Additionaly, I also like to hike and explore nature.</p>
                    </div>
                    
                    <div>
                        <a href="/about" class="bg-transparent border-2 border-red-500 hover:bg-red-500 hover:text-white text-white font-semibold py-3 px-6 rounded-lg transition duration-300">Learn More About Me</a>
                    </div>
                </div>

            </div>
        </div>
    </div>




    <div id="techSection" class="py-30 relative overflow-hidden">

        
            <div class="absolute inset-0 -z-10">
                <div class="absolute top-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/25 to-blue-900/15 rounded-full blur-3xl"></div>
                <div class="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-gradient-to-tl from-red-600/25 to-red-900/15 rounded-full blur-3xl"></div>

                <img src="/img/spiderweb.png" alt="" class="absolute top-0 left-0 w-full h-full opacity-[0.35] object-cover pointer-events-none" />
            
                
            </div>
            
            <div class="max-w-7xl mx-auto px-4 text-center">
                <h2 class="text-5xl font-bold mb-20 text-white">Most Used Technologies</h2>
                
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                    {#each technologies as tech}
                        <div class="group relative flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-{tech.hoverColor || 'red-500'}/70 hover:shadow-[0_8px_40px_rgba(255,255,255,0.4)] hover:bg-gradient-to-br hover:from-{tech.hoverColor || 'red-500'}/10 hover:to-slate-900/60">
                            <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                class="w-16 h-16 mb-4 object-contain transition-all duration-500 group-hover:scale-125 drop-shadow-lg {tech.needsBackground ? 'bg-white rounded-full p-1' : ''}"
                            >
                            <span class="text-base font-medium text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
                        </div>
                    {/each}
                </div>
            </div>
    </div>


</section>
