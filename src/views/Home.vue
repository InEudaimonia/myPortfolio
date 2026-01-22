<template>
    <nav class="navigation-bar">
        <span>Adrian</span>
        <div class="nav-buttons">
            <!-- Navigations -->
             <button>About</button>
             <button>Tech Stack</button>
             <button>Projects</button>
             <button> Contact</button>
             <div class="nav-socials" v-for="soc in socials" :key="soc.name">
                 <!-- Socials -->
                 <img :src="soc.iconPath" class="social-icon" @click="handleSocialClick(soc.url)"/>
             </div>
        </div>
    </nav>
    <main>

    </main>
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
<style scoped>
.navigation-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: roboto;
    font-weight: bold;
}

.navigation-bar span {
    font-size: 24px;
}

.nav-buttons button {
    border: none;
    font-weight: medium;
    font-size: 20px;
}

.nav-buttons {
    display: flex;
}

.nav-socials {
    display: flex;
    margin-left: 10px;
}
</style>