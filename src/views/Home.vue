<template>
  <nav class="relative flex flex-nowrap justify-between items-center gap-4 px-4 md:px-[5%] pt-[12px]">
    <span
      class="animation name-animation font-['poppinsBold'] text-[30px] bg-gradient-to-r from-[#13B0F5] to-[#CA24B4] bg-clip-text text-transparent font-medium"
      data-replace="De Los Reyes"
    >
      Adrian Paul
    </span>
    <div class="hidden md:flex flex-wrap justify-center items-center gap-4 font-['dmSans'] text-[#666666] text-[20px] dark-mode-text">
      <!-- Navigations -->
      <div class="flex flex-wrap justify-center gap-4 md:gap-[24px] md:mr-[40px]">
        <button class="animation" data-replace="About">About</button>
        <button class="animation" data-replace="Tech Stack">Tech Stack</button>
        <button class="animation" data-replace="Projects">Projects</button>
        <button class="animation" data-replace="Contact">Contact</button>
      </div>
      <div class="pr-0 md:pr-[20px]" v-for="soc in socials" :key="soc.name">
        <!-- Socials -->
        <img
          class="w-[30px]"
          :src="isDarkMode ? soc.darkIconPath : soc.iconPath"
          @click="handleSocialClick(soc.url)"
        />
      </div>
      <button
        class="dark-mode-toggle"
        type="button"
        :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggleDarkMode"
      >
        <span class="theme-icon" aria-hidden="true">☾</span>
        <span class="theme-icon" aria-hidden="true">☀</span>
        <span class="theme-toggle-thumb" :class="{ 'theme-toggle-thumb-dark': isDarkMode }"></span>
      </button>
    </div>
    <button
      class="md:hidden relative flex flex-col justify-center gap-1.5 w-10 h-10 p-2 text-[#666666]"
      type="button"
      aria-label="Toggle navigation menu"
      :aria-expanded="menuOpen"
      @click="menuOpen = !menuOpen"
    >
      <span class="menu-bar" :class="{ 'menu-bar-top-open': menuOpen }"></span>
      <span class="menu-bar" :class="{ 'menu-bar-middle-open': menuOpen }"></span>
      <span class="menu-bar" :class="{ 'menu-bar-bottom-open': menuOpen }"></span>
    </button>
    <Transition name="menu">
      <div
        v-show="menuOpen"
        class="absolute top-full left-4 right-4 z-10 flex flex-col gap-6 p-6 rounded-lg border border-[#e8e4dc] bg-[#faf9f6] shadow-lg font-['dmSans'] text-[18px] text-[#666666] dark-mode-menu md:hidden"
      >
        <div class="flex flex-col items-center gap-4">
          <button class="animation" data-replace="About" @click="menuOpen = false">About</button>
          <button class="animation" data-replace="Tech Stack" @click="menuOpen = false">Tech Stack</button>
          <button class="animation" data-replace="Projects" @click="menuOpen = false">Projects</button>
          <button class="animation" data-replace="Contact" @click="menuOpen = false">Contact</button>
        </div>
        <div class="flex justify-center gap-6">
          <button
            v-for="soc in socials"
            :key="soc.name"
            type="button"
            :aria-label="soc.name"
            @click="handleSocialClick(soc.url)"
          >
            <img class="w-7 h-7" :src="isDarkMode ? soc.darkIconPath : soc.iconPath" :alt="soc.name" />
          </button>
        </div>
        <button
          class="dark-mode-toggle self-center"
          type="button"
          :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleDarkMode"
        >
          <span class="theme-icon" aria-hidden="true">☾</span>
          <span class="theme-icon" aria-hidden="true">☀</span>
          <span class="theme-toggle-thumb" :class="{ 'theme-toggle-thumb-dark': isDarkMode }"></span>
        </button>
      </div>
    </Transition>
  </nav>
  <main class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[15%] mt-20 md:mt-[10%] px-4">
    <div class="font-['poppinsBold'] text-[36px] sm:text-[46px] md:text-[58px] text-[#42446E] dark-mode-heading">
      <p>Hi!</p>
      <p>My name is</p>
      <p
        class="animation name-animation
        bg-gradient-to-r
        from-[#13B0F5] to-[#CA24B4]
        bg-clip-text
        text-transparent"
        data-replace="De Los Reyes"
      >
        Adrian Paul
      </p>
      <p>I build things for web</p>
    </div>
    <img
      class="object-cover rounded-[50%] w-56 h-56 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px]"
      src="/src/assets/images/Home/Ez.jpg"
    />
  </main>

  <section class="flex flex-col justify-center mt-32 md:mt-[20%]">
    <div class="flex flex-col items-center">
      <p class="font-[poppinsBold] text-[32px] sm:text-[40px] md:text-[48px] text-[#42446E] text-center dark-mode-heading">My Tech Stack</p>
      <p class="font-[poppins] text-[24px] sm:text-[32px] md:text-[48px] text-center px-4 dark-mode-text">
        Technologies I've been working with recently
      </p>
    </div>

    <div class="tech-name-carousel" aria-label="Technologies in my tech stack">
      <div class="tech-name-track">
        <div
          v-for="copy in 2"
          :key="copy"
          class="tech-name-group"
          :aria-hidden="copy === 2"
        >
          <span
            v-for="icon in techStack"
            :key="`${copy}-${icon.name}`"
            class="tech-name"
          >
            {{ icon.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- Tech Stack Icons-->
    <div class="flex justify-center mt-12 md:mt-[100px] px-4">
        <div class="tech-stack-grid grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 gap-6 sm:gap-12 md:gap-[105px]">
          <img
            class="tech-stack-icon w-20 h-20 sm:w-24 sm:h-24 md:w-[120px] md:h-[120px]"
            v-for="icon in techStack"
            :key="icon.name"
            :src="icon.iconPath"
            :alt="icon.name"
          />
        </div>
    </div>
  </section>

  <section class="flex justify-center mt-32 md:mt-[20%]">
    <p class="font-['poppinsBold'] text-[32px] sm:text-[40px] md:text-[48px] text-[#42446E] dark-mode-heading">Achievements</p>
  </section>

  <section>
    <div class="text-[18px] font-[dmSans] flex flex-col justify-between px-4 md:px-[5%] dark-mode-text">
        <div class="flex flex-col md:flex-row justify-between gap-8">
            <p>Adrian</p>
            <div class="flex flex-col md:flex-row gap-6 md:gap-[100px]">
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-[50px] break-words">
                    <p>+63 976 002 4418</p>
                    <p>adrianpauldelosreyes@gmail.com</p>
                </div>
                <!-- Socials -->
                <div class="flex gap-[20px]">
                    <img
                        class="w-[30px]"
                        v-for="soc in socials" :key="soc.name"
                        :src="soc.iconPath"
                        @click="handleSocialClick(soc.url)"
                    />
                </div>
            </div>
        </div>
        <div class="footer-divider w-full h-[1px] bg-[#141414] m-auto my-8 md:my-[50px]"></div>
        <div class="flex flex-col md:flex-row justify-between gap-6 mb-4 md:mb-[1%]">
            <div class="flex flex-wrap gap-4 md:gap-[52px] text-[18px] font-[dmSans]">
                <button v-for="button in FooterButtons" :key="button.name">{{ button.name }}</button>
            </div>
            <p class="text-left md:text-right">Built by <span class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">Adrian Paul</span> with <span class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">Love</span> and <span class="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">Dedication</span></p>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Github from "../assets/images/svg/Github.svg";
import LinkedIn from "../assets/images/svg/LinkedIn.svg";
import Telegram from "../assets/images/svg/Telegram.svg";
import GithubDark from "../assets/images/svg/GitHubDark.svg";
import LinkedInDark from "../assets/images/svg/LinkedInDark.svg";
import TelegramDark from "../assets/images/svg/TelegramDark.svg";

interface Socials {
  name: string;
  url: string;
  iconPath: string;
  darkIconPath: string;
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
    darkIconPath: GithubDark,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adrian-paul-de-los-reyes-38270b312",
    iconPath: LinkedIn,
    darkIconPath: LinkedInDark,
  },
  {
    name: "Telegram",
    url: "https://t.me/trueYanni",
    iconPath: Telegram,
    darkIconPath: TelegramDark,
  },
]);

const menuOpen = ref(false);
const isDarkMode = ref(false);

const toggleDarkMode = (): void => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  document.body.classList.toggle("dark-mode", isDarkMode.value);
};

onMounted(() => {
  isDarkMode.value = document.documentElement.classList.contains("dark");
  document.body.classList.toggle("dark-mode", isDarkMode.value);
});

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
<style lang="css" scoped>
:global(html) {
  transition: background-color 0.25s ease, color 0.25s ease;
}

:global(body) {
  transition: background-color 0.25s ease, color 0.25s ease;
}

:global(body.dark-mode) {
  background-color: #111827;
  color: #e5e7eb;
}

.dark-mode-text {
  transition: color 0.25s ease;
}

.dark-mode-heading {
  transition: color 0.25s ease;
}

:global(body.dark-mode) .dark-mode-text {
  color: #d1d5db;
}

:global(body.dark-mode) .dark-mode-heading {
  color: #f3f4f6;
}

.dark-mode-toggle {
  position: relative;
  display: inline-flex;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  width: 4.5rem;
  height: 2.25rem;
  padding: 0 0.45rem;
  color: #4b5563;
  background-color: #f3f4f6;
  font-size: 1rem;
  line-height: 1;
  transition: border-color 0.25s ease, color 0.25s ease;
}

.theme-icon {
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 1.25rem;
  text-align: center;
  line-height: 1;
  transform: translateY(-50%);
}

.theme-icon:first-child {
  left: 0.45rem;
}

.theme-icon:nth-child(2) {
  right: 0.45rem;
}

.theme-toggle-thumb {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  z-index: 0;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  transition: transform 0.3s ease, background-color 0.25s ease;
}

.theme-toggle-thumb-dark {
  transform: translateX(2.25rem);
}

body.dark-mode .dark-mode-toggle {
  border-color: #6b7280;
  color: #e5e7eb;
  background-color: #374151;
}

body.dark-mode .theme-toggle-thumb {
  background-color: #1f2937;
}

.dark-mode-menu {
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

:global(body.dark-mode) .dark-mode-menu {
  border-color: #374151;
  background-color: #1f2937;
}

.menu-bar {
  display: block;
  width: 24px;
  height: 2px;
  background-color: currentColor;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.menu-bar-top-open {
  transform: translateY(8px) rotate(45deg);
}

.menu-bar-middle-open {
  opacity: 0;
}

.menu-bar-bottom-open {
  transform: translateY(-8px) rotate(-45deg);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
  transform-origin: top right;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

.tech-name-carousel {
  width: 100%;
  overflow: hidden;
  margin-top: 3rem;
}

.tech-name-track {
  display: flex;
  width: max-content;
  animation: tech-name-scroll 35s linear infinite;
}

.tech-name-group {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 3rem;
  padding-right: 3rem;
}

.tech-name {
  background-image: linear-gradient(to right, #13B0F5, #CA24B4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: "dmSans";
  font-size: clamp(1.25rem, 2vw, 2rem);
  font-weight: 600;
  white-space: nowrap;
}

.tech-stack-icon {
  transition: transform 0.3s ease, filter 0.3s ease;
  will-change: transform;
}

.tech-stack-icon:hover {
  transform: translateY(-10px) scale(1.08) rotate(2deg);
  filter: drop-shadow(0 12px 10px rgb(19 176 245 / 20%))
    drop-shadow(0 6px 14px rgb(202 36 180 / 18%));
}

@media (max-width: 767px) {
  .tech-stack-grid img:nth-last-child(2) {
    grid-column: 1;
    justify-self: end;
  }

  .tech-stack-grid img:last-child {
    grid-column: 2;
    justify-self: start;
  }
}

@keyframes tech-name-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tech-name-track {
    animation-play-state: paused;
  }

  .tech-stack-icon {
    transition: none;
  }

  .tech-stack-icon:hover {
    transform: none;
    filter: none;
  }
}

.animation {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.animation::before,
.animation::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}

.animation::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

.animation::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  width: max-content;
  white-space: nowrap;
  transform-origin: 0% 50%;
  transform: translate3d(-200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

.animation:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}

.animation:hover {
  color: transparent;
}

.name-animation {
  overflow: visible;
}

.name-animation:hover {
  background-image: none;
}

.name-animation::after {
  background-image: linear-gradient(to right, #13B0F5, #CA24B4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.name-animation::before {
  display: none;
}

.animation:hover::after {
  transform: translate3d(0, 0, 0);
}

.animation span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

.animation:hover span {
  transform: translate3d(200%, 0, 0);
}
</style>

<style lang="css">
body.dark-mode {
  background-color: #111827;
  color: #e5e7eb;
}

body.dark-mode .dark-mode-text {
  color: #d1d5db;
}

body.dark-mode .dark-mode-heading {
  color: #f3f4f6;
}

body.dark-mode .dark-mode-toggle {
  border-color: #6b7280;
  color: #e5e7eb;
}

body.dark-mode .dark-mode-menu {
  border-color: #374151;
  background-color: #1f2937;
  color: #d1d5db;
}

body.dark-mode .footer-divider {
  background-color: #6b7280;
}
</style>