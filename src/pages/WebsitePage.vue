<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
const { isDark, initialize, toggle } = useTheme()
onMounted(() => initialize())

const navigation = [
  { name: 'Product', href: '#product' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Partners', href: '#partners' },
  { name: 'Careers', href: '#careers' },
  { name: 'Company', href: '#about' },
]

const stats = [
  { value: '33,000', label: 'Strike kits contracted' },
  { value: '50+', label: 'Countries deployed' },
  { value: '1M+', label: 'Flight hours logged' },
  { value: '#1', label: 'Open-source autopilot' },
]

const capabilities = [
  {
    number: '01',
    title: 'Swarm Orchestration',
    description: 'One operator, many drones. Scale from a handful to hundreds with coordinated, AI-driven autonomy that adapts in real time.',
  },
  {
    number: '02',
    title: 'Open Architecture',
    description: 'Integrate multiple manufacturers, payloads, and ground stations into a single interoperable system. No vendor lock-in.',
  },
  {
    number: '03',
    title: 'Edge AI',
    description: 'Deploy AI models and applications directly on the vehicle. Compute at the edge, decide at the edge, even without connectivity.',
  },
  {
    number: '04',
    title: 'Battle-Proven Resilience',
    description: 'Lock onto targets and complete missions even when GPS and video links are jammed. Proven in the most demanding environments.',
  },
  {
    number: '05',
    title: 'BVLOS Operations',
    description: 'Beyond-visual-line-of-sight capability with autonomous navigation, obstacle avoidance, and return-to-home failsafes.',
  },
  {
    number: '06',
    title: 'Rapid Deployment',
    description: 'From unboxing to airborne in minutes. Intuitive tap-to-target interface reduces training from weeks to hours.',
  },
]

const products = [
  {
    name: 'Skynode S',
    tag: 'Autopilot',
    description: 'AI-enabled autopilot that turns any drone into an autonomous node. Resilient against jamming, priced like an Android phone.',
    specs: ['Quad-core ARM processor', 'Integrated IMU and GPS', 'AI accelerator', 'Encrypted datalink'],
  },
  {
    name: 'AuterionOS',
    tag: 'Platform',
    description: 'The operating system for swarms. One common architecture that integrates fleets from multiple manufacturers into a single, interoperable fabric.',
    specs: ['Linux-based RTOS', 'PX4 flight stack', 'Container runtime', 'OTA updates'],
  },
  {
    name: 'Autonomy Suite',
    tag: 'Software',
    description: 'Edge computing and AI applications deployed directly on the drone, enabling target tracking, BVLOS, and mission completion without communications.',
    specs: ['Computer vision', 'Object tracking', 'Path planning', 'Sensor fusion'],
  },
]

const partners = [
  'U.S. Department of Defense',
  'NATO Allied Forces',
  'Ukraine Ministry of Defence',
  'Taiwan NCSIST',
  'German Bundeswehr',
  'Major UAS Manufacturers',
]

const verticals = [
  'Defense and Security',
  'Critical Infrastructure',
  'Energy and Utilities',
  'Agriculture',
  'Public Safety',
  'Logistics',
  'Construction and Mining',
  'Maritime',
  'Environmental Monitoring',
  'Government and Policy',
  'Developer Ecosystem',
  'Allied Nations',
]

const footerNav = {
  product: [
    { name: 'Skynode S', href: '#' },
    { name: 'AuterionOS', href: '#' },
    { name: 'Autonomy Suite', href: '#' },
    { name: 'Ground Station', href: '#' },
    { name: 'Documentation', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  resources: [
    { name: 'Developer Portal', href: '#' },
    { name: 'PX4 Community', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Status', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Export Compliance', href: '#' },
  ],
}

const contactSubject = ref('')
</script>

<template>
  <div class="min-h-screen bg-page text-high">

    <!-- ============================================================ -->
    <!-- NAVBAR — minimal, monochrome, no decoration                  -->
    <!-- ============================================================ -->
    <header class="sticky top-0 z-50 bg-page/90  backdrop-blur-md">
      <nav class="mx-auto flex max-w-full items-center justify-between px-6 lg:px-8 h-16 border-b border-line">
        <!-- Logo -->
        <a href="#" class="flex items-center">
          <svg class="h-5 text-high" viewBox="0 0 780 148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M138 146.168L121.894 102.5L92.3311 119.492L99.8761 141.892C100.747 144.45 103.104 146.168 105.789 146.168H138ZM50.87 107.287L129.875 81.8905C131.144 81.4886 132.486 82.1463 132.922 83.3522C133.321 84.485 132.885 85.764 131.833 86.3487L31.1007 144.231C28.9243 145.51 26.4214 146.168 23.9185 146.168H6.54325C1.90018 146.168 -1.25565 141.417 0.485501 137.105L54.0258 4.0927C55.0415 1.60785 57.4356 0 60.0836 0H79.5627C82.3195 0 84.7498 1.68093 85.693 4.27541L112.826 77.8344L81.7754 87.8103L71.655 57.6267C70.3491 53.7898 65.0168 53.6071 63.4933 57.3709L45.5015 101.44C44.123 104.875 47.3514 108.42 50.87 107.287ZM546.387 12.9949C546.387 8.39964 542.537 7.79893 536.807 9.50088L516.237 16.0784V34.4796H546.387V12.9949ZM317.937 70.4909V48.1552V48.1452H300.097V28.9532C300.097 24.3779 296.247 23.7773 290.517 25.4792L269.967 32.0567V48.1452H256.887V70.4809H269.947V118.947C269.857 125.544 271.187 131.01 273.927 135.345C276.667 139.68 280.607 142.874 285.727 144.916C290.837 146.949 296.977 147.83 304.107 147.529C307.807 147.359 310.957 146.959 313.597 146.348C316.227 145.737 318.277 145.187 319.717 144.726L315.127 122.781C314.447 122.961 313.447 123.151 312.137 123.392C310.807 123.632 309.547 123.752 308.307 123.752C306.617 123.752 305.147 123.502 303.917 122.991C302.687 122.481 301.737 121.62 301.077 120.408C300.427 119.187 300.097 117.555 300.097 115.463V70.4909H317.937ZM470.497 65.8356V51.8496C470.497 47.2543 466.637 46.6636 460.907 48.3555L441.247 54.6528V146.148H471.397V92.3661C471.397 88.4616 472.247 85.0177 473.977 82.0643C475.707 79.1109 478.047 76.7982 481.017 75.1463C483.977 73.4944 487.357 72.6535 491.147 72.6535C493.027 72.6535 495.137 72.8036 497.487 73.104C498.787 73.2641 500.017 73.5044 501.057 73.7347C501.907 73.9149 503.187 74.005 503.187 72.4933V49.9874C503.187 48.6459 502.327 47.6948 500.987 47.4545L500.786 47.4172C500.149 47.2984 499.501 47.1776 498.977 47.1141C497.457 46.9239 495.967 46.8338 494.527 46.8338C489.137 46.8338 484.397 48.4156 480.317 51.5592C476.247 54.7028 473.317 59.4583 471.527 65.8456H470.497V65.8356ZM378.737 148C368.537 148 359.747 145.968 352.387 141.903C345.027 137.838 339.357 132.032 335.407 124.483C331.457 116.934 329.477 107.944 329.477 97.5221C329.477 87.4004 331.457 78.5403 335.437 70.9515C339.417 63.3628 344.997 57.4561 352.227 53.2212C359.457 48.9863 367.967 46.8739 377.787 46.8739C384.627 46.8739 390.927 47.9451 396.657 50.0976C402.387 52.2401 407.367 55.4337 411.567 59.6686C415.767 63.9035 419.027 69.1194 421.357 75.3266C423.677 81.5337 424.827 88.7019 424.827 96.8313V104.56H359.277V105.221C359.277 109.426 360.097 113.09 361.737 116.224C363.377 119.357 365.687 121.77 368.677 123.502C371.667 125.234 375.227 126.085 379.357 126.085C382.157 126.085 384.717 125.694 387.027 124.904C389.347 124.113 391.327 122.951 392.987 121.399C394.637 119.848 395.887 117.966 396.737 115.753L424.407 116.764C424.417 116.764 424.417 116.764 424.427 116.774C424.427 116.774 424.437 116.774 424.437 116.784V116.794V116.814C423.247 123.141 420.657 128.628 416.667 133.293C412.677 137.979 407.477 141.603 401.057 144.176C394.607 146.719 387.177 148 378.737 148ZM361.847 77.9596C360.297 80.5626 359.447 83.4959 359.287 86.7597H396.707C396.667 83.2657 395.857 80.1821 394.297 77.489C392.717 74.7859 390.577 72.6735 387.837 71.1418C385.097 69.61 381.937 68.8491 378.377 68.8491C374.777 68.8491 371.507 69.6801 368.637 71.342C365.747 72.9839 363.487 75.2064 361.847 77.9596ZM516.247 146.148V48.1553H537.807H546.397V146.148H516.247ZM611.967 147.99C601.767 147.99 593.007 145.878 585.677 141.643C578.347 137.408 572.697 131.511 568.757 123.902C564.807 116.314 562.827 107.494 562.827 97.462C562.827 87.3804 564.807 78.5403 568.757 70.9515C572.707 63.3628 578.347 57.4561 585.677 53.2212C593.007 48.9863 601.767 46.8739 611.967 46.8739C622.157 46.8739 630.927 48.9863 638.257 53.2212C645.587 57.4561 651.227 63.3628 655.177 70.9515C659.127 78.5403 661.107 87.3804 661.107 97.462C661.107 107.504 659.127 116.314 655.177 123.902C651.227 131.491 645.587 137.408 638.257 141.643C630.927 145.888 622.157 147.99 611.967 147.99ZM612.157 125.094C616.057 125.094 619.357 123.912 622.057 121.56C624.757 119.207 626.807 115.923 628.237 111.728C629.667 107.544 630.367 102.728 630.367 97.2818C630.367 91.7955 629.647 86.9699 628.237 82.8051C626.807 78.6404 624.757 75.3566 622.057 72.9739C619.367 70.5911 616.057 69.4098 612.157 69.4098C608.117 69.4098 604.727 70.6012 601.967 72.9739C599.197 75.3666 597.107 78.6304 595.677 82.8051C594.247 86.9799 593.547 91.7955 593.547 97.2818C593.547 102.718 594.267 107.534 595.677 111.728C597.107 115.923 599.197 119.207 601.967 121.56C604.707 123.912 608.117 125.094 612.157 125.094ZM243.247 51.5693V146.148H214.437V128.027H213.427C211.267 133.944 207.577 138.639 202.377 142.163C197.177 145.667 190.907 147.429 183.607 147.429C176.937 147.429 171.077 145.908 166.047 142.864C161.017 139.821 157.097 135.546 154.327 130.039C151.547 124.533 150.127 118.056 150.087 110.607V54.6428L170.637 48.0852C176.367 46.3833 180.217 46.984 180.217 51.5792V104.81C180.257 110.207 181.687 114.492 184.517 117.635C187.347 120.779 191.207 122.361 196.087 122.361C199.227 122.361 202.087 121.65 204.667 120.218C207.247 118.786 209.297 116.724 210.847 114.001C212.397 111.288 213.157 107.934 213.107 103.979V54.6528L233.657 48.0953C239.397 46.3933 243.247 46.994 243.247 51.5693ZM706.207 51.5793C706.207 46.984 702.347 46.3933 696.617 48.0853L677.537 54.1823V146.158H707.687V90.0735C707.717 86.2391 708.447 82.9653 709.847 80.2122C711.247 77.469 713.227 75.3666 715.777 73.8849C718.327 72.4032 721.287 71.6824 724.637 71.6824C729.687 71.6824 733.647 73.2642 736.527 76.4078C739.387 79.5514 740.797 83.9064 740.757 89.4828V146.158H770.907V83.6962C770.947 76.2877 769.567 69.8303 766.767 64.3239C763.947 58.8176 760.007 54.5227 754.907 51.4692C749.817 48.4157 743.837 46.8739 737.007 46.8739C729.787 46.8739 723.557 48.5759 718.357 51.9697C713.157 55.3636 709.477 60.039 707.307 65.9458H706.217V52.3902V51.5793H706.207Z" fill="currentColor"/>
          </svg>
        </a>

        <!-- Desktop nav -->
        <div class="hidden lg:flex lg:items-center lg:gap-x-8">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm text-low hover:text-high  transition-colors duration-200"
          >{{ item.name }}</a>
        </div>

        <!-- Theme toggle -->
        <div class="hidden lg:flex lg:items-center">
          <button
            @click="toggle"
            class="p-1.5 text-dim hover:text-high  transition-colors duration-200"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <svg v-else class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <button class="lg:hidden -m-2.5 p-2.5 text-low" @click="mobileMenuOpen = true">
          <Bars3Icon class="h-5 w-5" />
        </button>
      </nav>

      <!-- Mobile menu -->
      <Dialog :open="mobileMenuOpen" class="lg:hidden" @close="mobileMenuOpen = false">
        <div class="fixed inset-0 z-50 bg-black/10 dark:bg-black/40" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-page overflow-y-auto">
          <div class="flex items-center justify-between px-6 h-16 border-b border-line">
            <a href="#" class="flex items-center">
              <svg class="h-5 text-high" viewBox="0 0 780 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M138 146.168L121.894 102.5L92.3311 119.492L99.8761 141.892C100.747 144.45 103.104 146.168 105.789 146.168H138ZM50.87 107.287L129.875 81.8905C131.144 81.4886 132.486 82.1463 132.922 83.3522C133.321 84.485 132.885 85.764 131.833 86.3487L31.1007 144.231C28.9243 145.51 26.4214 146.168 23.9185 146.168H6.54325C1.90018 146.168 -1.25565 141.417 0.485501 137.105L54.0258 4.0927C55.0415 1.60785 57.4356 0 60.0836 0H79.5627C82.3195 0 84.7498 1.68093 85.693 4.27541L112.826 77.8344L81.7754 87.8103L71.655 57.6267C70.3491 53.7898 65.0168 53.6071 63.4933 57.3709L45.5015 101.44C44.123 104.875 47.3514 108.42 50.87 107.287ZM546.387 12.9949C546.387 8.39964 542.537 7.79893 536.807 9.50088L516.237 16.0784V34.4796H546.387V12.9949ZM317.937 70.4909V48.1552V48.1452H300.097V28.9532C300.097 24.3779 296.247 23.7773 290.517 25.4792L269.967 32.0567V48.1452H256.887V70.4809H269.947V118.947C269.857 125.544 271.187 131.01 273.927 135.345C276.667 139.68 280.607 142.874 285.727 144.916C290.837 146.949 296.977 147.83 304.107 147.529C307.807 147.359 310.957 146.959 313.597 146.348C316.227 145.737 318.277 145.187 319.717 144.726L315.127 122.781C314.447 122.961 313.447 123.151 312.137 123.392C310.807 123.632 309.547 123.752 308.307 123.752C306.617 123.752 305.147 123.502 303.917 122.991C302.687 122.481 301.737 121.62 301.077 120.408C300.427 119.187 300.097 117.555 300.097 115.463V70.4909H317.937ZM470.497 65.8356V51.8496C470.497 47.2543 466.637 46.6636 460.907 48.3555L441.247 54.6528V146.148H471.397V92.3661C471.397 88.4616 472.247 85.0177 473.977 82.0643C475.707 79.1109 478.047 76.7982 481.017 75.1463C483.977 73.4944 487.357 72.6535 491.147 72.6535C493.027 72.6535 495.137 72.8036 497.487 73.104C498.787 73.2641 500.017 73.5044 501.057 73.7347C501.907 73.9149 503.187 74.005 503.187 72.4933V49.9874C503.187 48.6459 502.327 47.6948 500.987 47.4545L500.786 47.4172C500.149 47.2984 499.501 47.1776 498.977 47.1141C497.457 46.9239 495.967 46.8338 494.527 46.8338C489.137 46.8338 484.397 48.4156 480.317 51.5592C476.247 54.7028 473.317 59.4583 471.527 65.8456H470.497V65.8356ZM378.737 148C368.537 148 359.747 145.968 352.387 141.903C345.027 137.838 339.357 132.032 335.407 124.483C331.457 116.934 329.477 107.944 329.477 97.5221C329.477 87.4004 331.457 78.5403 335.437 70.9515C339.417 63.3628 344.997 57.4561 352.227 53.2212C359.457 48.9863 367.967 46.8739 377.787 46.8739C384.627 46.8739 390.927 47.9451 396.657 50.0976C402.387 52.2401 407.367 55.4337 411.567 59.6686C415.767 63.9035 419.027 69.1194 421.357 75.3266C423.677 81.5337 424.827 88.7019 424.827 96.8313V104.56H359.277V105.221C359.277 109.426 360.097 113.09 361.737 116.224C363.377 119.357 365.687 121.77 368.677 123.502C371.667 125.234 375.227 126.085 379.357 126.085C382.157 126.085 384.717 125.694 387.027 124.904C389.347 124.113 391.327 122.951 392.987 121.399C394.637 119.848 395.887 117.966 396.737 115.753L424.407 116.764C424.417 116.764 424.417 116.764 424.427 116.774C424.427 116.774 424.437 116.774 424.437 116.784V116.794V116.814C423.247 123.141 420.657 128.628 416.667 133.293C412.677 137.979 407.477 141.603 401.057 144.176C394.607 146.719 387.177 148 378.737 148ZM361.847 77.9596C360.297 80.5626 359.447 83.4959 359.287 86.7597H396.707C396.667 83.2657 395.857 80.1821 394.297 77.489C392.717 74.7859 390.577 72.6735 387.837 71.1418C385.097 69.61 381.937 68.8491 378.377 68.8491C374.777 68.8491 371.507 69.6801 368.637 71.342C365.747 72.9839 363.487 75.2064 361.847 77.9596ZM516.247 146.148V48.1553H537.807H546.397V146.148H516.247ZM611.967 147.99C601.767 147.99 593.007 145.878 585.677 141.643C578.347 137.408 572.697 131.511 568.757 123.902C564.807 116.314 562.827 107.494 562.827 97.462C562.827 87.3804 564.807 78.5403 568.757 70.9515C572.707 63.3628 578.347 57.4561 585.677 53.2212C593.007 48.9863 601.767 46.8739 611.967 46.8739C622.157 46.8739 630.927 48.9863 638.257 53.2212C645.587 57.4561 651.227 63.3628 655.177 70.9515C659.127 78.5403 661.107 87.3804 661.107 97.462C661.107 107.504 659.127 116.314 655.177 123.902C651.227 131.491 645.587 137.408 638.257 141.643C630.927 145.888 622.157 147.99 611.967 147.99ZM612.157 125.094C616.057 125.094 619.357 123.912 622.057 121.56C624.757 119.207 626.807 115.923 628.237 111.728C629.667 107.544 630.367 102.728 630.367 97.2818C630.367 91.7955 629.647 86.9699 628.237 82.8051C626.807 78.6404 624.757 75.3566 622.057 72.9739C619.367 70.5911 616.057 69.4098 612.157 69.4098C608.117 69.4098 604.727 70.6012 601.967 72.9739C599.197 75.3666 597.107 78.6304 595.677 82.8051C594.247 86.9799 593.547 91.7955 593.547 97.2818C593.547 102.718 594.267 107.534 595.677 111.728C597.107 115.923 599.197 119.207 601.967 121.56C604.707 123.912 608.117 125.094 612.157 125.094ZM243.247 51.5693V146.148H214.437V128.027H213.427C211.267 133.944 207.577 138.639 202.377 142.163C197.177 145.667 190.907 147.429 183.607 147.429C176.937 147.429 171.077 145.908 166.047 142.864C161.017 139.821 157.097 135.546 154.327 130.039C151.547 124.533 150.127 118.056 150.087 110.607V54.6428L170.637 48.0852C176.367 46.3833 180.217 46.984 180.217 51.5792V104.81C180.257 110.207 181.687 114.492 184.517 117.635C187.347 120.779 191.207 122.361 196.087 122.361C199.227 122.361 202.087 121.65 204.667 120.218C207.247 118.786 209.297 116.724 210.847 114.001C212.397 111.288 213.157 107.934 213.107 103.979V54.6528L233.657 48.0953C239.397 46.3933 243.247 46.994 243.247 51.5693ZM706.207 51.5793C706.207 46.984 702.347 46.3933 696.617 48.0853L677.537 54.1823V146.158H707.687V90.0735C707.717 86.2391 708.447 82.9653 709.847 80.2122C711.247 77.469 713.227 75.3666 715.777 73.8849C718.327 72.4032 721.287 71.6824 724.637 71.6824C729.687 71.6824 733.647 73.2642 736.527 76.4078C739.387 79.5514 740.797 83.9064 740.757 89.4828V146.158H770.907V83.6962C770.947 76.2877 769.567 69.8303 766.767 64.3239C763.947 58.8176 760.007 54.5227 754.907 51.4692C749.817 48.4157 743.837 46.8739 737.007 46.8739C729.787 46.8739 723.557 48.5759 718.357 51.9697C713.157 55.3636 709.477 60.039 707.307 65.9458H706.217V52.3902V51.5793H706.207Z" fill="currentColor"/>
              </svg>
            </a>
            <button class="-m-2.5 p-2.5 text-low" @click="mobileMenuOpen = false">
              <XMarkIcon class="h-5 w-5" />
            </button>
          </div>
          <div class="px-6 py-8 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="block py-3 text-base text-high border-b border-line "
              @click="mobileMenuOpen = false"
            >{{ item.name }}</a>
            <button
              @click="toggle"
              class="flex w-full items-center gap-3 py-3 text-base text-low hover:text-high  transition-colors duration-200"
            >
              <svg v-if="isDark" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <svg v-else class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
              {{ isDark ? 'Light mode' : 'Dark mode' }}
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <!-- ============================================================ -->
    <!-- HERO — large type, ample negative space, no decoration       -->
    <!-- ============================================================ -->
    <section class="mx-auto max-w-full px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
      <h1 class="text-[clamp(2rem,0.77rem+5.26vw,5.5rem)] font-medium text-high leading-[1.06] tracking-[-0.03em] max-w-5xl">
        We build the platform for autonomous mass.
      </h1>
      <div class="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
        <p class="lg:col-span-5 lg:col-start-7 text-[clamp(1rem,0.91rem+0.38vw,1.25rem)] text-low leading-[1.4]">
          Open architecture that transforms individual drones into coordinated swarms across air, land, and sea. Protecting democracies with scalable, interoperable autonomy.
        </p>
      </div>
      <div class="mt-12 flex items-center gap-x-8">
        <a href="#contact" class="text-sm font-medium text-high border-b border-line-active pb-0.5 hover:border-line-hover transition-colors duration-200">Request a demo</a>
        <a href="#capabilities" class="group inline-flex items-center gap-2 text-sm text-low hover:text-high  transition-colors duration-200">
          Explore capabilities
          <ArrowRightIcon class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>

    <!-- Hero image — full bleed -->
    <section class="pb-16 lg:pb-24">
      <div class="relative h-[70vh] lg:h-[85vh] w-full overflow-hidden bg-surface-1  border-y border-line">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <svg class="mx-auto h-10 w-10 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
            <p class="mt-3 text-xs uppercase tracking-[0.2em] text-dim">Hero image — drone swarm formation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- STATS — horizontal rule, then numbers                        -->
    <!-- ============================================================ -->
    <section class="border-t border-line">
      <div class="mx-auto max-w-full px-6 lg:px-8 py-16 lg:py-20">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div v-for="stat in stats" :key="stat.label">
            <p class="text-[clamp(2rem,1.65rem+1.5vw,3rem)] font-medium tracking-[-0.025em] text-high leading-[1.1]">{{ stat.value }}</p>
            <p class="mt-2 text-sm text-low">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- PARTNERS — minimal logo cloud, monochrome                    -->
    <!-- ============================================================ -->
    <section id="partners" class="border-t border-line">
      <div class="mx-auto max-w-full px-6 lg:px-8 py-16 lg:py-20">
        <p class="text-xs uppercase tracking-[0.2em] text-dim mb-10">Trusted by</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-12">
          <span v-for="partner in partners" :key="partner" class="text-sm text-dim">{{ partner }}</span>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- PRODUCT — asymmetric grid, geometric cards                   -->
    <!-- ============================================================ -->
    <section id="product" class="border-t border-line">
      <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-20">
          <h2 class="lg:col-span-7 text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] text-high leading-[1.12]">
            Everything you need to deploy autonomous fleets
          </h2>
          <p class="lg:col-span-4 lg:col-start-9 mt-6 lg:mt-2 text-base text-low leading-relaxed">
            From silicon to software, Auterion provides the complete stack, purpose-built for swarm operations at scale.
          </p>
        </div>
        <div class="grid gap-px bg-line lg:grid-cols-3">
          <div
            v-for="product in products"
            :key="product.name"
            class="bg-page p-8 lg:p-10 group"
          >
            <div class="aspect-4/3 w-full bg-surface-1  border border-line mb-8 overflow-hidden relative">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="h-8 w-8 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>
            </div>
            <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">{{ product.tag }}</p>
            <h3 class="text-[clamp(1.125rem,1.08rem+0.19vw,1.25rem)] font-medium tracking-[-0.01em] text-high mb-4 leading-[1.2]">{{ product.name }}</h3>
            <p class="text-sm text-low leading-relaxed mb-8">{{ product.description }}</p>
            <ul class="space-y-2.5 mb-8">
              <li v-for="spec in product.specs" :key="spec" class="flex items-center gap-3 text-xs text-low">
                <span class="h-px w-3 bg-surface-2  shrink-0"></span>
                {{ spec }}
              </li>
            </ul>
            <a href="#" class="inline-flex items-center gap-1.5 text-sm text-high group-hover:underline underline-offset-4 transition-all duration-200">
              Learn more
              <ArrowUpRightIcon class="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- CAPABILITIES — numbered list, clean geometry                  -->
    <!-- ============================================================ -->
    <section id="capabilities" class="border-t border-line">
      <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
        <div class="mb-20">
          <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">Capabilities</p>
          <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] text-high leading-[1.12] max-w-3xl">
            Built for the demands of autonomous operations
          </h2>
        </div>
        <!-- Capabilities showcase image -->
        <div class="mb-20 relative aspect-21/9 w-full overflow-hidden bg-surface-1  border border-line">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <svg class="mx-auto h-10 w-10 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              <p class="mt-3 text-xs uppercase tracking-[0.2em] text-dim">Capabilities overview — system diagram</p>
            </div>
          </div>
        </div>

        <div class="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="cap in capabilities"
            :key="cap.number"
            class="bg-page p-8 lg:p-10"
          >
            <p class="text-xs font-mono text-dim mb-6">{{ cap.number }}</p>
            <h3 class="text-base font-medium text-high mb-3">{{ cap.title }}</h3>
            <p class="text-sm text-low leading-relaxed">{{ cap.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- ABOUT — asymmetric two-column, ample space                   -->
    <!-- ============================================================ -->
    <section id="about" class="border-t border-line">
      <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-5">
            <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">About</p>
            <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] text-high leading-[1.12]">
              We are engineers and mission partners.
            </h2>
          </div>
          <div class="lg:col-span-6 lg:col-start-7 mt-10 lg:mt-0">
            <div class="space-y-6 text-base text-low leading-relaxed">
              <p>
                Auterion integrates <span class="text-high">autonomy, open architecture, and battle-proven resilience</span> to deliver measurable impact for defense and commercial operations.
              </p>
              <p>
                Our roots are in open-source development. Making PX4 freely available created the largest developer community for autonomous robots in the world. Today we turn that foundation into products that democracies can trust.
              </p>
              <p>
                We feel a moral obligation to support liberal democracies. Technology companies should support armed forces protecting freedom. Our systems ensure that human operators always remain in control.
              </p>
            </div>
          </div>
        </div>

        <!-- About image -->
        <div class="mt-16 relative aspect-video w-full overflow-hidden bg-surface-1  border border-line">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <svg class="mx-auto h-10 w-10 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              <p class="mt-3 text-xs uppercase tracking-[0.2em] text-dim">Team / office photo</p>
            </div>
          </div>
        </div>

        <!-- Fact grid -->
        <div class="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          <div class="bg-page p-8">
            <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] text-high leading-[1.15]">2017</p>
            <p class="text-sm text-low mt-2">Founded in Zurich</p>
          </div>
          <div class="bg-page p-8">
            <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] text-high leading-[1.15]">350+</p>
            <p class="text-sm text-low mt-2">Team members</p>
          </div>
          <div class="bg-page p-8">
            <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] text-high leading-[1.15]">PX4</p>
            <p class="text-sm text-low mt-2">Open-source heritage</p>
          </div>
          <div class="bg-page p-8">
            <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] text-high leading-[1.15]">$50M</p>
            <p class="text-sm text-low mt-2">Pentagon contract</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- VERTICALS — clean list grid                                   -->
    <!-- ============================================================ -->
    <section class="border-t border-line">
      <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-16">
          <div class="lg:col-span-5">
            <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">Industries</p>
            <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] text-high leading-[1.12]">
              Autonomous systems for every domain
            </h2>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="vertical in verticals"
            :key="vertical"
            href="#"
            class="group flex items-center justify-between py-5 border-t border-line text-low hover:text-high  transition-colors duration-200"
          >
            <span class="text-sm">{{ vertical }}</span>
            <ArrowRightIcon class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- CAREERS — stark banner, inverted colors                       -->
    <!-- ============================================================ -->
    <section id="careers">
      <div class="bg-surface-3 dark:bg-white">
        <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32 lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-7">
            <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] text-white dark:text-high leading-[1.12]">
              Join the mission.
            </h2>
            <p class="mt-6 text-base text-dim leading-relaxed max-w-lg">
              We are building the future of autonomous systems. If you want to work on technology that matters, for defense, for democracies, for the world, we would love to meet you.
            </p>
            <a
              href="#"
              class="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white dark:text-high border-b border-fg-inverse pb-0.5 hover:border-line-hover transition-colors duration-200"
            >
              View open positions
              <ArrowRightIcon class="h-3.5 w-3.5" />
            </a>
          </div>
          <div class="lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
            <div class="aspect-square w-full overflow-hidden bg-surface-2  border border-line-active  relative">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="h-10 w-10 text-low" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- CONTACT — two-column, clean form                              -->
    <!-- ============================================================ -->
    <section id="contact" class="border-t border-line">
      <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">Contact</p>
            <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] text-high leading-[1.12] mb-6">
              Let us explore how we can help.
            </h2>
            <p class="text-base text-low leading-relaxed mb-12">
              Whether you are scaling autonomous operations, integrating multi-vendor fleets, or building the next generation of unmanned systems, we would like to hear from you.
            </p>
            <div class="space-y-6 text-sm">
              <div>
                <p class="text-high mb-1">Headquarters</p>
                <p class="text-low">Zurich, Switzerland</p>
                <p class="text-low">Arlington, Virginia</p>
              </div>
              <div>
                <p class="text-high mb-1">Email</p>
                <p class="text-low">contact@auterion.com</p>
              </div>
            </div>
          </div>
          <form class="lg:col-span-6 lg:col-start-7 mt-16 lg:mt-0 space-y-6" @submit.prevent>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">First name</label>
                <input type="text" class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high placeholder:text-dim focus:outline-none focus:border-line-active transition-colors duration-200" />
              </div>
              <div>
                <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">Last name</label>
                <input type="text" class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high placeholder:text-dim focus:outline-none focus:border-line-active transition-colors duration-200" />
              </div>
            </div>
            <div>
              <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">Email</label>
              <input type="email" placeholder="you@organization.com" class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high placeholder:text-dim focus:outline-none focus:border-line-active transition-colors duration-200" />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">Subject</label>
              <select v-model="contactSubject" class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high focus:outline-none focus:border-line-active transition-colors duration-200">
                <option value="" disabled>Select a topic</option>
                <option>Defense inquiry</option>
                <option>Commercial partnership</option>
                <option>Developer ecosystem</option>
                <option>Press</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">Message</label>
              <textarea rows="4" placeholder="Tell us about your mission..." class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high placeholder:text-dim focus:outline-none focus:border-line-active transition-colors duration-200 resize-none"></textarea>
            </div>
            <button type="submit" class="mt-4 text-sm font-medium text-high border-b border-line-active pb-0.5 hover:border-line-hover transition-colors duration-200">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- FOOTER — four-column, clean grid                              -->
    <!-- ============================================================ -->
    <footer class="border-t border-line">
      <div class="mx-auto max-w-full px-6 lg:px-8 py-16 lg:py-20">
        <div class="lg:grid lg:grid-cols-6 lg:gap-8">
          <!-- Brand -->
          <div class="lg:col-span-2">
            <a href="#" class="flex items-center">
              <svg class="h-5 text-high" viewBox="0 0 780 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M138 146.168L121.894 102.5L92.3311 119.492L99.8761 141.892C100.747 144.45 103.104 146.168 105.789 146.168H138ZM50.87 107.287L129.875 81.8905C131.144 81.4886 132.486 82.1463 132.922 83.3522C133.321 84.485 132.885 85.764 131.833 86.3487L31.1007 144.231C28.9243 145.51 26.4214 146.168 23.9185 146.168H6.54325C1.90018 146.168 -1.25565 141.417 0.485501 137.105L54.0258 4.0927C55.0415 1.60785 57.4356 0 60.0836 0H79.5627C82.3195 0 84.7498 1.68093 85.693 4.27541L112.826 77.8344L81.7754 87.8103L71.655 57.6267C70.3491 53.7898 65.0168 53.6071 63.4933 57.3709L45.5015 101.44C44.123 104.875 47.3514 108.42 50.87 107.287ZM546.387 12.9949C546.387 8.39964 542.537 7.79893 536.807 9.50088L516.237 16.0784V34.4796H546.387V12.9949ZM317.937 70.4909V48.1552V48.1452H300.097V28.9532C300.097 24.3779 296.247 23.7773 290.517 25.4792L269.967 32.0567V48.1452H256.887V70.4809H269.947V118.947C269.857 125.544 271.187 131.01 273.927 135.345C276.667 139.68 280.607 142.874 285.727 144.916C290.837 146.949 296.977 147.83 304.107 147.529C307.807 147.359 310.957 146.959 313.597 146.348C316.227 145.737 318.277 145.187 319.717 144.726L315.127 122.781C314.447 122.961 313.447 123.151 312.137 123.392C310.807 123.632 309.547 123.752 308.307 123.752C306.617 123.752 305.147 123.502 303.917 122.991C302.687 122.481 301.737 121.62 301.077 120.408C300.427 119.187 300.097 117.555 300.097 115.463V70.4909H317.937ZM470.497 65.8356V51.8496C470.497 47.2543 466.637 46.6636 460.907 48.3555L441.247 54.6528V146.148H471.397V92.3661C471.397 88.4616 472.247 85.0177 473.977 82.0643C475.707 79.1109 478.047 76.7982 481.017 75.1463C483.977 73.4944 487.357 72.6535 491.147 72.6535C493.027 72.6535 495.137 72.8036 497.487 73.104C498.787 73.2641 500.017 73.5044 501.057 73.7347C501.907 73.9149 503.187 74.005 503.187 72.4933V49.9874C503.187 48.6459 502.327 47.6948 500.987 47.4545L500.786 47.4172C500.149 47.2984 499.501 47.1776 498.977 47.1141C497.457 46.9239 495.967 46.8338 494.527 46.8338C489.137 46.8338 484.397 48.4156 480.317 51.5592C476.247 54.7028 473.317 59.4583 471.527 65.8456H470.497V65.8356ZM378.737 148C368.537 148 359.747 145.968 352.387 141.903C345.027 137.838 339.357 132.032 335.407 124.483C331.457 116.934 329.477 107.944 329.477 97.5221C329.477 87.4004 331.457 78.5403 335.437 70.9515C339.417 63.3628 344.997 57.4561 352.227 53.2212C359.457 48.9863 367.967 46.8739 377.787 46.8739C384.627 46.8739 390.927 47.9451 396.657 50.0976C402.387 52.2401 407.367 55.4337 411.567 59.6686C415.767 63.9035 419.027 69.1194 421.357 75.3266C423.677 81.5337 424.827 88.7019 424.827 96.8313V104.56H359.277V105.221C359.277 109.426 360.097 113.09 361.737 116.224C363.377 119.357 365.687 121.77 368.677 123.502C371.667 125.234 375.227 126.085 379.357 126.085C382.157 126.085 384.717 125.694 387.027 124.904C389.347 124.113 391.327 122.951 392.987 121.399C394.637 119.848 395.887 117.966 396.737 115.753L424.407 116.764C424.417 116.764 424.417 116.764 424.427 116.774C424.427 116.774 424.437 116.774 424.437 116.784V116.794V116.814C423.247 123.141 420.657 128.628 416.667 133.293C412.677 137.979 407.477 141.603 401.057 144.176C394.607 146.719 387.177 148 378.737 148ZM361.847 77.9596C360.297 80.5626 359.447 83.4959 359.287 86.7597H396.707C396.667 83.2657 395.857 80.1821 394.297 77.489C392.717 74.7859 390.577 72.6735 387.837 71.1418C385.097 69.61 381.937 68.8491 378.377 68.8491C374.777 68.8491 371.507 69.6801 368.637 71.342C365.747 72.9839 363.487 75.2064 361.847 77.9596ZM516.247 146.148V48.1553H537.807H546.397V146.148H516.247ZM611.967 147.99C601.767 147.99 593.007 145.878 585.677 141.643C578.347 137.408 572.697 131.511 568.757 123.902C564.807 116.314 562.827 107.494 562.827 97.462C562.827 87.3804 564.807 78.5403 568.757 70.9515C572.707 63.3628 578.347 57.4561 585.677 53.2212C593.007 48.9863 601.767 46.8739 611.967 46.8739C622.157 46.8739 630.927 48.9863 638.257 53.2212C645.587 57.4561 651.227 63.3628 655.177 70.9515C659.127 78.5403 661.107 87.3804 661.107 97.462C661.107 107.504 659.127 116.314 655.177 123.902C651.227 131.491 645.587 137.408 638.257 141.643C630.927 145.888 622.157 147.99 611.967 147.99ZM612.157 125.094C616.057 125.094 619.357 123.912 622.057 121.56C624.757 119.207 626.807 115.923 628.237 111.728C629.667 107.544 630.367 102.728 630.367 97.2818C630.367 91.7955 629.647 86.9699 628.237 82.8051C626.807 78.6404 624.757 75.3566 622.057 72.9739C619.367 70.5911 616.057 69.4098 612.157 69.4098C608.117 69.4098 604.727 70.6012 601.967 72.9739C599.197 75.3666 597.107 78.6304 595.677 82.8051C594.247 86.9799 593.547 91.7955 593.547 97.2818C593.547 102.718 594.267 107.534 595.677 111.728C597.107 115.923 599.197 119.207 601.967 121.56C604.707 123.912 608.117 125.094 612.157 125.094ZM243.247 51.5693V146.148H214.437V128.027H213.427C211.267 133.944 207.577 138.639 202.377 142.163C197.177 145.667 190.907 147.429 183.607 147.429C176.937 147.429 171.077 145.908 166.047 142.864C161.017 139.821 157.097 135.546 154.327 130.039C151.547 124.533 150.127 118.056 150.087 110.607V54.6428L170.637 48.0852C176.367 46.3833 180.217 46.984 180.217 51.5792V104.81C180.257 110.207 181.687 114.492 184.517 117.635C187.347 120.779 191.207 122.361 196.087 122.361C199.227 122.361 202.087 121.65 204.667 120.218C207.247 118.786 209.297 116.724 210.847 114.001C212.397 111.288 213.157 107.934 213.107 103.979V54.6528L233.657 48.0953C239.397 46.3933 243.247 46.994 243.247 51.5693ZM706.207 51.5793C706.207 46.984 702.347 46.3933 696.617 48.0853L677.537 54.1823V146.158H707.687V90.0735C707.717 86.2391 708.447 82.9653 709.847 80.2122C711.247 77.469 713.227 75.3666 715.777 73.8849C718.327 72.4032 721.287 71.6824 724.637 71.6824C729.687 71.6824 733.647 73.2642 736.527 76.4078C739.387 79.5514 740.797 83.9064 740.757 89.4828V146.158H770.907V83.6962C770.947 76.2877 769.567 69.8303 766.767 64.3239C763.947 58.8176 760.007 54.5227 754.907 51.4692C749.817 48.4157 743.837 46.8739 737.007 46.8739C729.787 46.8739 723.557 48.5759 718.357 51.9697C713.157 55.3636 709.477 60.039 707.307 65.9458H706.217V52.3902V51.5793H706.207Z" fill="currentColor"/>
              </svg>
            </a>
            <p class="mt-4 text-sm text-dim leading-relaxed max-w-xs">
              The platform for autonomous mass. Open architecture for coordinated swarms across air, land, and sea.
            </p>
            <div class="mt-8 flex gap-5">
              <a href="#" class="text-dim hover:text-high  transition-colors duration-200">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="text-dim hover:text-high  transition-colors duration-200">
                <span class="sr-only">GitHub</span>
                <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
              </a>
            </div>
          </div>

          <!-- Link columns -->
          <div class="mt-14 lg:mt-0 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:col-span-4">
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-dim">Product</p>
              <ul class="mt-5 space-y-3">
                <li v-for="link in footerNav.product" :key="link.name">
                  <a :href="link.href" class="text-sm text-low hover:text-high  transition-colors duration-200">{{ link.name }}</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-dim">Company</p>
              <ul class="mt-5 space-y-3">
                <li v-for="link in footerNav.company" :key="link.name">
                  <a :href="link.href" class="text-sm text-low hover:text-high  transition-colors duration-200">{{ link.name }}</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-dim">Resources</p>
              <ul class="mt-5 space-y-3">
                <li v-for="link in footerNav.resources" :key="link.name">
                  <a :href="link.href" class="text-sm text-low hover:text-high  transition-colors duration-200">{{ link.name }}</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-dim">Legal</p>
              <ul class="mt-5 space-y-3">
                <li v-for="link in footerNav.legal" :key="link.name">
                  <a :href="link.href" class="text-sm text-low hover:text-high  transition-colors duration-200">{{ link.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p class="text-xs text-dim">&copy; {{ new Date().getFullYear() }} Auterion AG. All rights reserved.</p>
          <p class="text-xs text-dim">Zurich &middot; Arlington &middot; Kyiv</p>
        </div>
      </div>
    </footer>

  </div>
</template>
