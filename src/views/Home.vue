<template>
    <nav class="flex justify-between items-center px-[5px] pt-[12px]">
        <span class="font-dmSans text-[20px] font-medium ml-[3%]">Adrian</span>
        <div class="flex font-['dmSans'] text-[#666666] text-[20px]">
            <!-- Navigations -->
             <div class="flex gap-[24px] mr-[40px]"> 
                 <button>About</button>
                 <button>Tech Stack</button>
                 <button>Projects</button>
                 <button> Contact</button>
             </div>
             <div class="pr-[20px]" v-for="soc in socials" :key="soc.name">
                 <!-- Socials -->
                 <img class="w-[30px]" :src="soc.iconPath" @click="handleSocialClick(soc.url)"/>
             </div>
        </div>
    </nav>
    <main class="flex justify-center items-center gap-[15%] mt-[10%]">
        <div class="font-['poppinsBold'] text-[58px] text-[#42446E]">
            <p>Hi!</p>
            <p>My name is</p>
            <p>Adrian Paul </p>I build things for web
        </div>
        <img class="rounded-[50%] w-[200px] h-[200px]" src="/src/assets/images/Home/Ez.jpg">
    </main>

    <section class="flex justify-center mt-[15%]">
        <div class="flex flex-col items-center">
            <p class="font-[poppinsBold] text-[48px] text-[#42446E]">My Tech Stack</p>
            <p class="font-[poppins] text-[48px]">Technologies I've been working with recently</p>
        </div>
        <div>
            <!-- Tech Stack Icons-->
        </div>

    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Github from '../assets/images/svg/Github.svg'
import LinkedIn from '../assets/images/svg/LinkedIn.svg'
import Telegram from '../assets/images/svg/Telegram.svg'

interface Socials {
    name: string
    url: string
    iconPath: string
}

const socials = ref<Socials[]>([
    { 
        name: "Github", 
        url: "https://github.com/InEudaimonia", 
        iconPath: Github 
        
    },
    {
        name: "LinkedIn", 
        url: "https://www.linkedin.com/in/adrian-paul-de-los-reyes-38270b312", 
        iconPath: LinkedIn 
    },
    {
        name: "Telegram", 
        url: "https://t.me/trueYanni", 
        iconPath: Telegram 
    }
])

const handleSocialClick = (url: string): void => {
    window.location.href = url
}

</script>