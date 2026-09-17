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
        <button class="animation nav-animation" data-replace="About" @click="scrollToSection('about')">About</button>
        <button class="animation nav-animation" data-replace="Tech Stack" @click="scrollToSection('tech-stack')">Tech Stack</button>
        <button class="animation nav-animation" data-replace="Projects" @click="scrollToSection('projects')">Projects</button>
        <button class="animation nav-animation" data-replace="Contact" @click="scrollToSection('contact')">Contact</button>
        <button class="animation nav-animation" data-replace="Testimonials" @click="scrollToSection('testimonials')">Testimonials</button>
      </div>
      <div class="pr-0 md:pr-[20px]" v-for="soc in socials" :key="soc.name">
        <!-- Socials -->
        <button type="button" :aria-label="`Open ${soc.name} profile`" @click="handleSocialClick(soc.url)">
          <img class="social-icon w-[30px]" :src="isDarkMode ? soc.darkIconPath : soc.iconPath" :alt="soc.name" />
        </button>
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
          <button class="animation nav-animation" data-replace="About" @click="navigateToSection('about')">About</button>
          <button class="animation nav-animation" data-replace="Tech Stack" @click="navigateToSection('tech-stack')">Tech Stack</button>
          <button class="animation nav-animation" data-replace="Projects" @click="navigateToSection('projects')">Projects</button>
          <button class="animation nav-animation" data-replace="Contact" @click="navigateToSection('contact')">Contact</button>
          <button class="animation nav-animation" data-replace="Testimonials" @click="navigateToSection('testimonials')">Testimonials</button>
        </div>
        <div class="flex justify-center gap-6">
          <button
            v-for="soc in socials"
            :key="soc.name"
            type="button"
            :aria-label="soc.name"
            @click="handleSocialClick(soc.url)"
          >
            <img class="social-icon w-7 h-7" :src="isDarkMode ? soc.darkIconPath : soc.iconPath" :alt="soc.name" />
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
  <main id="home" class="hero-section flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[15%] px-4">
    <div class="order-2 md:order-1 scroll-reveal scroll-reveal-left font-['poppinsBold'] text-[36px] sm:text-[46px] md:text-[58px] text-[#42446E] dark-mode-heading">
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
      <a
        class="resume-download-button"
        href="/Adrian%20Paul%20De%20Los%20Reyes%20-%20Frontend%20Developer.pdf"
        download="Web Engineer - De Los Reyes.pdf"
      >
        Download Resume
      </a>
    </div>
    <img
      class="order-1 md:order-2 scroll-reveal scroll-reveal-right object-cover rounded-[50%] w-56 h-56 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px]"
      src="/src/assets/images/Home/Ez.jpg"
      alt="Portrait of Adrian Paul V. De Los Reyes"
    />
  </main>

  <section id="about" class="content-section flex flex-col justify-center mt-24 md:mt-32 px-4 md:px-[8%]">
    <div class="scroll-reveal section-heading">
      <p class="section-title">About Me</p>
      <p class="section-subtitle">A little about who I am and what I do</p>
    </div>
    <div class="scroll-reveal scroll-reveal-up content-card max-w-4xl mx-auto">
      <p class="description-text">
        I am Adrian Paul V. De Los Reyes, a Web Engineer with 2+ years of
        professional experience building production web applications and H5 platforms.
        I create responsive, maintainable interfaces with a strong focus on reusable
        components, performance, accessibility, and polished user experiences.
      </p>
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="skills-group">
          <p class="resume-label">Technical Skills</p>
          <div class="skills-list">
            <span v-for="skill in technicalSkills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
        <div class="skills-group">
          <p class="resume-label">Frontend Focus</p>
          <ul class="focus-list">
            <li v-for="focus in frontendFocus" :key="focus">{{ focus }}</li>
          </ul>
        </div>
      </div>
      <div class="currently-learning mt-8">
        <p class="resume-label">Currently Learning</p>
        <p class="description-text mt-2">
          Deepening my React expertise through component architecture, hooks, and
          production-ready frontend patterns.
        </p>
        <span class="skill-tag inline-flex mt-3">React</span>
      </div>
    </div>
  </section>

  <section id="tech-stack" class="content-section flex flex-col justify-center mt-24 md:mt-32">
    <div class="scroll-reveal flex flex-col items-center">
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
    <div class="scroll-reveal scroll-reveal-up flex justify-center mt-12 md:mt-[100px] px-4">
        <div class="tech-stack-grid grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6 sm:gap-10 lg:gap-12 xl:gap-16">
          <img
            class="tech-stack-icon w-24 h-24 sm:w-28 sm:h-28 lg:w-28 lg:h-28 xl:w-[120px] xl:h-[120px]"
            v-for="icon in techStack"
            :key="icon.name"
            :src="icon.iconPath"
            :alt="icon.name"
          />
        </div>
    </div>
  </section>

  <section id="projects" class="content-section flex flex-col justify-center mt-24 md:mt-32 px-4 md:px-[8%]">
    <div class="scroll-reveal section-heading">
      <p class="section-title">Projects</p>
      <p class="section-subtitle">Some things I have built</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
      <article v-for="(project, index) in projects" :key="project.title" class="scroll-reveal scroll-reveal-up content-card project-card" :style="{ '--reveal-delay': `${index * 100}ms` }">
        <p class="project-title">{{ project.title }}</p>
        <p class="description-text">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2 mt-5">
          <span v-for="technology in project.technologies" :key="technology" class="project-tag">
            {{ technology }}
          </span>
        </div>
      </article>
    </div>
  </section>

  <section id="contact" class="content-section flex flex-col justify-center mt-24 md:mt-32 px-4 md:px-[8%]" aria-labelledby="contact-title">
    <div class="scroll-reveal section-heading">
      <h2 id="contact-title" class="section-title">Contact</h2>
      <p class="section-subtitle">Let&apos;s build something meaningful together</p>
    </div>
    <div class="scroll-reveal scroll-reveal-up content-card max-w-5xl mx-auto w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p class="description-text">Have a project in mind or want to say hello?</p>
          <a class="contact-email" href="mailto:adrianpauldelosreyes@gmail.com">
            adrianpauldelosreyes@gmail.com
          </a>
          <p class="mt-3 dark-mode-text">+63 998 914 1365</p>
        </div>
        <form class="contact-form" @submit.prevent="submitContactForm">
          <div class="form-field">
            <label for="contact-name">Name</label>
            <input id="contact-name" v-model="contactForm.name" name="name" type="text" autocomplete="name" required />
          </div>
          <div class="form-field">
            <label for="contact-email">Email</label>
            <input id="contact-email" v-model="contactForm.email" name="email" type="email" autocomplete="email" required />
          </div>
          <div class="form-field">
            <label for="contact-message">Message</label>
            <textarea id="contact-message" v-model="contactForm.message" name="message" rows="4" required></textarea>
          </div>
          <button class="form-submit" type="submit">Open Email Draft</button>
          <p v-if="contactStatus" class="form-status" role="status">{{ contactStatus }}</p>
        </form>
      </div>
    </div>
  </section>

  <section id="testimonials" class="content-section flex flex-col justify-center mt-24 md:mt-32 px-4 md:px-[8%]" aria-labelledby="testimonials-title">
    <div class="scroll-reveal section-heading">
      <h2 id="testimonials-title" class="section-title">Testimonials</h2>
      <p class="section-subtitle">Professional recommendations and feedback</p>
    </div>
    <div class="scroll-reveal scroll-reveal-up content-card testimonial-card max-w-3xl mx-auto w-full text-center">
      <p class="description-text">
        References and recommendations are available upon request. I am happy to
        connect recruiters and collaborators with people who have worked with me.
      </p>
      <a class="form-submit inline-block mt-6" href="mailto:adrianpauldelosreyes@gmail.com?subject=Professional%20reference%20request">
        Request a Reference
      </a>
    </div>
  </section>

  <section id="achievements" class="flex justify-center mt-24 md:mt-32">
    <div class="w-full px-4 md:px-[8%]">
      <p class="scroll-reveal section-title text-center">Experience & Education</p>
      <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article class="scroll-reveal scroll-reveal-up content-card">
          <p class="resume-label">Frontend Vue.js Developer</p>
          <p class="resume-heading">A&B Leisure Inc. (Digiplus) | 2024 - Aug 2026</p>
          <p class="description-text mt-4">
            Delivered high-impact Vue.js projects for GameZone and BingoPlus, supporting
            a platform serving 100K+ users and visitors. Resolved 100+ frontend bugs,
            built reusable global components, and delivered responsive H5 experiences
            integrated with iOS and Android applications.
          </p>
        </article>
        <article class="scroll-reveal scroll-reveal-up content-card">
          <p class="resume-label">Education</p>
          <p class="resume-heading">Bachelor of Science in Information Technology</p>
          <p class="description-text mt-2">Lyceum of Alabang | Graduated 2024</p>
          <p class="description-text mt-2">Cum Laude and Dean&apos;s List Scholar (2020-2024)</p>
          <p class="resume-label mt-6">Earlier Experience</p>
          <p class="resume-heading">Front-end IT Intern (WordPress)</p>
          <p class="description-text mt-2">Knowles Training Institute | 2024</p>
        </article>
      </div>
    </div>
  </section>

  <footer class="portfolio-footer mt-24 md:mt-32 px-4 md:px-[5%] dark-mode-text">
    <div class="footer-divider w-full h-[1px] bg-[#141414]"></div>
    <div class="scroll-reveal footer-main">
      <div class="footer-brand">
        <p class="footer-name">Adrian Paul</p>
        <p class="footer-role">Web Engineer</p>
        <p class="footer-location">Las Piñas City, Metro Manila, Philippines</p>
      </div>
      <div class="footer-contact">
        <p class="footer-label">Contact</p>
        <a href="mailto:adrianpauldelosreyes@gmail.com">adrianpauldelosreyes@gmail.com</a>
        <a href="tel:+639989141365">+63 998 914 1365</a>
      </div>
      <div class="footer-links">
        <p class="footer-label">Explore</p>
        <button v-for="button in FooterButtons" :key="button.name" @click="scrollToSection(button.section)">
          {{ button.name }}
        </button>
      </div>
      <div class="footer-socials">
        <p class="footer-label">Connect</p>
        <div class="flex gap-5">
          <button
            v-for="soc in socials"
            :key="soc.name"
            type="button"
            :aria-label="soc.name"
            @click="handleSocialClick(soc.url)"
          >
            <img
              class="social-icon w-[30px]"
              :src="isDarkMode ? soc.darkIconPath : soc.iconPath"
              :alt="soc.name"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Adrian Paul V. De Los Reyes. All rights reserved.</p>
      <p>Built with <span class="footer-accent">Vue.js</span>.</p>
    </div>
  </footer>
  <button
    v-show="showScrollTop"
    class="scroll-top-button"
    type="button"
    aria-label="Scroll to top"
    @click="scrollToTop"
  >
    <span aria-hidden="true">↑</span>
  </button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
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
    section: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
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
const showScrollTop = ref(false);
const contactForm = ref({
  name: "",
  email: "",
  message: "",
});
const contactStatus = ref("");
let revealObserver: IntersectionObserver | null = null;
const projects = ref<Project[]>([
  {
    title: "GameZone Tablegame Champions Cup",
    description: "Responsive H5 landing pages for GameZone Tablegame Champions Cup Seasons 1-3, supporting event promotions and user engagement.",
    technologies: ["Vue.js 3", "Tailwind CSS", "Axios", "Vue Router"],
  },
  {
    title: "GTCC Block Management",
    description: "A CMS-connected H5 block management interface for dynamic landing-page configuration and reduced manual development.",
    technologies: ["Vue.js 3", "Tailwind CSS", "Element Plus", "Axios"],
  },
  {
    title: "GameZone SEO Pages",
    description: "SEO-optimized pages for GameZone titles including Pusoy, Color Game, Super Ace, and other original games.",
    technologies: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "BingoMini Frontend",
    description: "Responsive frontend for an online Bingo platform with interactive UI components and integrated frontend services.",
    technologies: ["Vue.js 3", "Axios", "Element Plus"],
  },
]);
const technicalSkills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Vue.js 2/3",
  "Nuxt.js",
  "React",
  "Vue Router",
  "Pinia",
  "Axios",
  "Tailwind CSS",
  "Element Plus",
];
const frontendFocus = [
  "Responsive web and mobile-first H5 development",
  "Reusable, component-based architecture",
  "REST API integration and state management",
  "CMS-driven platforms and SEO-focused pages",
  "Production debugging and performance optimization",
];

const toggleDarkMode = (): void => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  document.body.classList.toggle("dark-mode", isDarkMode.value);
};

onMounted(() => {
  isDarkMode.value = document.documentElement.classList.contains("dark");
  document.body.classList.toggle("dark-mode", isDarkMode.value);
  window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      revealObserver?.observe(element);
    });
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollTopVisibility);
  revealObserver?.disconnect();
  revealObserver = null;
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
    name: "Nuxt.js",
    iconPath: "/src/assets/images/svg/techStack/NuxtJs.svg"
  },
  {
    name: "React",
    iconPath: "/src/assets/images/svg/techStack/React.svg"
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
        section: 'home'
    },
    {
        name: 'About',
        section: 'about'
    },
    {
        name: 'Technologies',
        section: 'tech-stack'
    },
    {
        name: 'Achievements',
        section: 'achievements'
    },
    {
        name: 'Contact',
        section: 'contact'
    },
    {
        name: 'Testimonials',
        section: 'testimonials'
    },
])

const handleSocialClick = (url: string): void => {
  window.location.href = url;
}

const submitContactForm = (): void => {
  const subject = encodeURIComponent(`Portfolio inquiry from ${contactForm.value.name}`);
  const body = encodeURIComponent(
    `Name: ${contactForm.value.name}\nEmail: ${contactForm.value.email}\n\n${contactForm.value.message}`,
  );
  window.location.href = `mailto:adrianpauldelosreyes@gmail.com?subject=${subject}&body=${body}`;
  contactStatus.value = "Your email app should open with the message prepared.";
};

const scrollToSection = (section: string): void => {
  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
};

const navigateToSection = (section: string): void => {
  menuOpen.value = false;
  scrollToSection(section);
}

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const updateScrollTopVisibility = (): void => {
  showScrollTop.value = window.scrollY > 0;
};
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

.section-heading {
  margin-bottom: 2.5rem;
  text-align: center;
}

.section-title {
  color: #42446E;
  font-family: "poppinsBold";
  font-size: clamp(2rem, 4vw, 3rem);
}

.section-subtitle {
  color: #666666;
  font-family: "poppins";
  font-size: clamp(1.25rem, 3vw, 2rem);
}

.content-card {
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: 0 12px 30px rgb(66 68 110 / 8%);
  padding: clamp(1.25rem, 4vw, 2.5rem);
  font-family: "dmSans";
  font-size: 1.125rem;
  line-height: 1.75;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.project-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgb(66 68 110 / 14%);
}

.project-title {
  color: #42446E;
  font-family: "poppinsBold";
  font-size: 1.5rem;
  line-height: 1.3;
}

.project-tag {
  border-radius: 9999px;
  border: 1px solid #bfdbfe;
  background-color: #f8fafc;
  color: #374151;
  font-family: "dmSans";
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  box-shadow: 0 2px 6px rgb(66 68 110 / 8%);
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.project-tag:hover {
  border-color: #13B0F5;
  background-color: #eff6ff;
  transform: translateY(-2px);
}

.contact-email {
  display: inline-block;
  margin-top: 1rem;
  background-image: linear-gradient(to right, #13B0F5, #CA24B4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: "poppinsBold";
  font-size: clamp(1rem, 3vw, 1.5rem);
  overflow-wrap: anywhere;
}

.currently-learning {
  border-top: 2px solid #ca24b4;
  padding-top: 1rem;
}

.contact-form {
  display: grid;
  gap: 1rem;
  text-align: left;
}

.form-field {
  display: grid;
  gap: 0.4rem;
}

.form-field label {
  color: #42446E;
  font-family: "poppinsBold";
  font-size: 0.95rem;
}

.form-field input,
.form-field textarea {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.6rem;
  background-color: #ffffff;
  color: #1f2937;
  font-family: "dmSans";
  font-size: 1rem;
  padding: 0.7rem 0.8rem;
  resize: vertical;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: #13B0F5;
  outline: 3px solid rgb(19 176 245 / 20%);
}

.form-submit {
  border: 0;
  border-radius: 9999px;
  background-image: linear-gradient(to right, #13B0F5, #CA24B4);
  color: #ffffff;
  cursor: pointer;
  font-family: "dmSans";
  font-weight: 600;
  padding: 0.7rem 1.2rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.form-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgb(66 68 110 / 20%);
}

.form-status {
  color: #047857;
  font-family: "dmSans";
  font-size: 0.9rem;
}

.resume-download-button {
  display: inline-block;
  margin-top: 1.5rem;
  border-radius: 9999px;
  background-image: linear-gradient(to right, #13B0F5, #CA24B4);
  color: white;
  font-family: "dmSans";
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  box-shadow: 0 8px 18px rgb(66 68 110 / 20%);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.resume-download-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 22px rgb(66 68 110 / 30%);
}

.description-text {
  color: #4b5563;
  transition: color 0.25s ease;
}

.resume-label {
  color: #42446E;
  font-family: "poppinsBold";
  font-size: 1rem;
  line-height: 1.4;
}

.resume-heading {
  color: #42446E;
  font-family: "dmSans";
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
}

.skills-group {
  border-top: 2px solid #13B0F5;
  padding-top: 1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;
}

.skill-tag {
  border: 1px solid #dbeafe;
  border-radius: 9999px;
  background-color: #f8fafc;
  color: #374151;
  font-family: "dmSans";
  font-size: 0.9rem;
  padding: 0.35rem 0.75rem;
}

.focus-list {
  display: grid;
  gap: 0.75rem;
  margin-top: 1rem;
  color: #4b5563;
  font-family: "dmSans";
  list-style: none;
}

.focus-list li {
  position: relative;
  padding-left: 1.25rem;
}

.focus-list li::before {
  position: absolute;
  left: 0;
  color: #ca24b4;
  content: "•";
  font-weight: 700;
}

:global(body.dark-mode) .skill-tag {
  border-color: #475569;
  background-color: #111827;
  color: #e2e8f0;
}

:global(body.dark-mode) .project-tag {
  border-color: #475569;
  background-color: #111827;
  color: #cbd5e1;
  box-shadow: 0 2px 6px rgb(0 0 0 / 18%);
}

:global(body.dark-mode) .project-tag:hover {
  border-color: #13B0F5;
  background-color: #1e293b;
}

:global(body.dark-mode) .focus-list {
  color: #cbd5e1;
}

:global(body.dark-mode) .form-field label,
:global(body.dark-mode) .form-status {
  color: #d1d5db;
}

:global(body.dark-mode) .form-field input,
:global(body.dark-mode) .form-field textarea {
  border-color: #4b5563;
  background-color: #111827;
  color: #f3f4f6;
}

.animation:focus-visible,
button:focus-visible,
a:focus-visible {
  outline: 3px solid #13B0F5;
  outline-offset: 3px;
}

.social-icon {
  cursor: pointer;
  transition: transform 0.25s ease, filter 0.25s ease;
  will-change: transform;
}

.social-icon:hover {
  transform: translateY(-4px) scale(1.12);
  filter: drop-shadow(0 6px 8px rgb(8 92 128 / 30%))
    drop-shadow(0 3px 10px rgb(126 20 111 / 25%));
}

.portfolio-footer {
  font-family: "dmSans";
  font-size: 1rem;
}

.hero-section {
  min-height: calc(100svh - 4rem);
}

.content-section,
#home,
#achievements,
.portfolio-footer {
  scroll-margin-top: 2rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr 0.75fr 0.75fr;
  gap: 2rem;
  padding: 1.5rem 0 3rem;
}

.footer-name {
  background-image: linear-gradient(to right, #13B0F5, #CA24B4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: "poppinsBold";
  font-size: 1.75rem;
}

.footer-role,
.footer-location {
  margin-top: 0.5rem;
  color: #666666;
}

.footer-location {
  font-size: 0.875rem;
}

.footer-label {
  margin-bottom: 1rem;
  color: #42446E;
  font-family: "poppinsBold";
}

.footer-contact,
.footer-links,
.footer-socials {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
}

.footer-contact a,
.footer-links button {
  color: #666666;
  text-align: left;
  transition: color 0.2s ease;
}

.footer-contact a:hover,
.footer-links button:hover {
  color: #13B0F5;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid #e5e7eb;
  padding: 1.25rem 0;
  color: #777777;
  font-size: 0.875rem;
}

.footer-accent {
  background-image: linear-gradient(to right, #13B0F5, #E70FAA);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
}

:global(body.dark-mode) .footer-role,
:global(body.dark-mode) .footer-location,
:global(body.dark-mode) .footer-contact a,
:global(body.dark-mode) .footer-links button,
:global(body.dark-mode) .footer-bottom {
  color: #d1d5db;
}

:global(body.dark-mode) .footer-label {
  color: #f3f4f6;
}

:global(body.dark-mode) .footer-bottom {
  border-color: #374151;
}

@media (max-width: 767px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem 1.5rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .footer-main {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    grid-column: auto;
  }
}

:global(body.dark-mode) .section-title,
:global(body.dark-mode) .project-title,
:global(body.dark-mode) .resume-label,
:global(body.dark-mode) .resume-heading {
  color: #f3f4f6;
}

:global(body.dark-mode) .section-subtitle {
  color: #e5e7eb;
}

:global(body.dark-mode) .content-card {
  border-color: #374151;
  background-color: #1f2937;
  box-shadow: 0 12px 30px rgb(0 0 0 / 20%);
}

:global(body.dark-mode) .description-text {
  color: #e5e7eb;
}

:global(body.dark-mode) .project-title,
:global(body.dark-mode) .resume-label,
:global(body.dark-mode) .resume-heading {
  color: #f9fafb;
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
  right: 0.2rem;
  z-index: 0;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #42446E;
  box-shadow: 0 1px 4px rgb(0 0 0 / 25%);
  transition: transform 0.3s ease, background-color 0.25s ease;
  transform: none;
}

.theme-toggle-thumb-dark {
  right: auto;
  left: 0.2rem;
}

body.dark-mode .dark-mode-toggle {
  border-color: #6b7280;
  color: #e5e7eb;
  background-color: #374151;
}

body.dark-mode .theme-toggle-thumb {
  background-color: #1f2937;
}

body.dark-mode .tech-stack-icon:hover {
  filter: drop-shadow(0 12px 10px rgb(19 176 245 / 20%))
    drop-shadow(0 6px 14px rgb(202 36 180 / 18%));
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
  filter: drop-shadow(0 12px 10px rgb(8 92 128 / 35%))
    drop-shadow(0 6px 14px rgb(126 20 111 / 30%));
}

@media (min-width: 400px) and (max-width: 639px) {
  .tech-stack-grid {
    gap: 1.5rem;
  }

  .tech-stack-grid img:last-child {
    grid-column: 2;
    grid-row: 6;
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .tech-stack-grid img:last-child {
    grid-column: 3;
    grid-row: 4;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .tech-stack-grid img:last-child {
    grid-column: 3;
    grid-row: 4;
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
  .social-icon {
    transition: none;
  }

  .social-icon:hover {
    transform: none;
    filter: none;
  }

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

.nav-animation::before {
  display: none;
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

.nav-animation:hover::after {
  background-image: linear-gradient(to right, #13B0F5, #CA24B4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.scroll-top-button {
  position: fixed;
  bottom: 1.25rem;
  left: 1.25rem;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background-image: linear-gradient(135deg, #13B0F5, #CA24B4);
  color: white;
  font-family: "dmSans";
  font-size: 1.5rem;
  line-height: 1;
  box-shadow: 0 8px 18px rgb(66 68 110 / 25%);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.scroll-top-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 22px rgb(66 68 110 / 35%);
}

.scroll-reveal {
  --reveal-delay: 0ms;
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s ease var(--reveal-delay),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--reveal-delay);
}

.scroll-reveal-left {
  transform: translateX(-32px);
}

.scroll-reveal-right {
  transform: translateX(32px);
}

.scroll-reveal-up {
  transform: translateY(32px);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media (max-width: 640px) {
  .scroll-top-button {
    bottom: 1rem;
    left: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    .scroll-reveal,
    .scroll-reveal-left,
    .scroll-reveal-right,
    .scroll-reveal-up {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
}

</style>

<style lang="css">
body.dark-mode {
  background-color: #111827;
  color: #e5e7eb;
}

body.dark-mode .dark-mode-text {
  color: #e5e7eb;
}

body.dark-mode .description-text {
  color: #e5e7eb;
}

body.dark-mode .content-card {
  border-color: #374151;
  background-color: #1f2937;
}

body.dark-mode .project-title,
body.dark-mode .resume-label,
body.dark-mode .resume-heading {
  color: #f9fafb;
}

body.dark-mode .section-title,
body.dark-mode .project-title,
body.dark-mode .resume-label,
body.dark-mode .resume-heading,
body.dark-mode .form-field label,
body.dark-mode .footer-label {
  color: #f9fafb;
}

body.dark-mode .section-subtitle,
body.dark-mode .focus-list,
body.dark-mode .footer-role,
body.dark-mode .footer-location,
body.dark-mode .footer-contact a,
body.dark-mode .footer-links button,
body.dark-mode .footer-bottom {
  color: #d1d5db;
}

body.dark-mode .focus-list {
  font-weight: 500;
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

body.dark-mode .scroll-top-button {
  box-shadow: 0 8px 18px rgb(0 0 0 / 35%);
}
</style>