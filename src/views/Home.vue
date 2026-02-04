<template>
  <nav class="flex justify-between items-center px-[5%] pt-[12px]">
    <span class="font-['poppinsBold'] text-[30px] bg-gradient-to-r from-[#13B0F5] to-[#CA24B4] bg-clip-text text-transparent font-medium">Adrian Paul</span>
    <div class="flex font-['dmSans'] text-[#666666] text-[20px]">
      <!-- Navigations -->
      <div class="flex gap-[24px] mr-[40px]">
        <button>About</button>
        <button>Tech Stack</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
      <div class="pr-[20px]" v-for="soc in socials" :key="soc.name">
        <!-- Socials -->
        <img
          class="w-[30px]"
          :src="soc.iconPath"
          @click="handleSocialClick(soc.url)"
        />
      </div>
    </div>
  </nav>
  <main class="flex justify-center items-center gap-[15%] mt-[10%]">
    <div class="font-['poppinsBold'] text-[58px] text-[#42446E]">
      <p>Hi!</p>
      <p>My name is</p>
      <p
        class="bg-gradient-to-r from-[#13B0F5] to-[#CA24B4] bg-clip-text text-transparent"
      >
        Adrian Paul
      </p>
      <p>I build things for web</p>
    </div>
    <img
      class="object-cover rounded-[50%] w-[350px] h-[350px]"
      src="/src/assets/images/Home/Ez.jpg"
    />
  </main>

  <section class="flex flex-col justify-center mt-[20%]">
    <div class="flex flex-col items-center">
      <p class="font-[poppinsBold] text-[48px] text-[#42446E]">My Tech Stack</p>
      <p class="font-[poppins] text-[48px]">
        Technologies I've been working with recently
      </p>
    </div>

    <!-- Tech Stack Icons-->
    <div class="flex justify-center mt-[100px]">
        <div class="grid grid-cols-7 gap-[105px]">
          <img
            class="w-[120px] h-[120px]"
            v-for="icon in techStack"
            :key="icon.name"
            :src="icon.iconPath"
            :alt="icon.name"
          />
        </div>
    </div>
  </section>

  <section class="flex justify-center mt-[20%]">
    <p class="font-['poppinsBold'] text-[48px] text-[#42446E]">Achievements</p>
  </section>

  <section>
    <div class="text-[18px] font-[dmSans] flex flex-col justify-between px-[5%]">
        <div class="flex justify-between">
            <p>Adrian</p>
            <div class="flex gap-[100px]">
                <div class="flex gap-[50px]">
                    <p>+63 976 002 4418</p>
                    <p>adrianpauldelosreyes@gmail.com</p>
                </div>
                <!-- Socials -->
                <div class="flex gap-[20px]" >
                    <img
                        class="w-[30px]"
                        v-for="soc in socials" :key="soc.name"
                        :src="soc.iconPath"
                        @click="handleSocialClick(soc.url)"
                    />
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-[#141414] m-auto my-[50px]"></div>
        <div class="flex justify-between mb-[1%]">
            <div class="flex gap-[52px] text-[18px] font-[dmSans]">
                <button v-for="button in FooterButtons" :key="button.name">{{ button.name }}</button>
            </div>
            <p>Built by <span class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">Adrian Paul</span> with <span class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">Love</span> and <span class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">Dedication</span></p>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Github from "../assets/images/svg/Github.svg";
import LinkedIn from "../assets/images/svg/LinkedIn.svg";
import Telegram from "../assets/images/svg/Telegram.svg";

interface Socials {
  name: string;
  url: string;
  iconPath: string;
}

interface TechStack {
  name: string;
  iconPath: string;
}

interface FooterButtons {
    name: string;
    method: string;
}

const socials = ref<Socials[]>([
  {
    name: "Github",
    url: "https://github.com/InEudaimonia",
    iconPath: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adrian-paul-de-los-reyes-38270b312",
    iconPath: LinkedIn,
  },
  {
    name: "Telegram",
    url: "https://t.me/trueYanni",
    iconPath: Telegram,
  },
]);

const techStack = ref<TechStack[]>([
  {
    name: "HTML",
    iconPath: "/src/assets/images/svg/techStack/Html.svg",
  },
  {
    name: "CSS",
    iconPath: "/src/assets/images/svg/techStack/Css.svg",
  },
  {
    name: "JavaScript",
    iconPath: "/src/assets/images/svg/techStack/JavaScript.svg"
  },
  {
    name: "TypeScript",
    iconPath: "/src/assets/images/svg/techStack/TypeScript.svg"
  },
  {
    name: "Vue.js",
    iconPath: "/src/assets/images/svg/techStack/Vue.svg"
  },
  {
    name: "Tailwind CSS",
    iconPath: "/src/assets/images/svg/techStack/Tailwind.svg"
  },
  {
    name: "Pinia",
    iconPath: "/src/assets/images/svg/techStack/Pinia.svg"
  },
  {
    name: "NPM",
    iconPath: "/src/assets/images/svg/techStack/Npm.svg"
  },
  {
    name: "Node",
    iconPath: "/src/assets/images/svg/techStack/Node.svg"
  },
  {
    name: "Postman",
    iconPath: "/src/assets/images/svg/techStack/Postman.svg"
  },
  {
    name: "Sass",
    iconPath: "/src/assets/images/svg/techStack/Sass.svg"
  },
  {
    name: "NextJs",
    iconPath: "/src/assets/images/svg/techStack/NextJs.svg"
  },
  {
    name: "Vite",
    iconPath: "/src/assets/images/svg/techStack/ViteJs.svg"
  },
  {
    name: "VS Code",
    iconPath: "/src/assets/images/svg/techStack/VsCode.svg"
  },
]);

const FooterButtons = ref<FooterButtons[]>([
    {
        name: 'Home',
        method: 'goToHome'
    },
    {
        name: 'About',
        method: 'goToAbout'
    },
    {
        name: 'Technologies',
        method: 'goToTechnologies'
    },
    {
        name: 'Achievements',
        method: 'goToAchievements'
    },
    {
        name: 'Contact',
        method: 'goToContact'
    },
])

const handleSocialClick = (url: string): void => {
  window.location.href = url;
}

const goToHome = () => {

}
</script>
