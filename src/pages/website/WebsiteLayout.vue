<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useNavTheme } from '@/composables/useNavTheme'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
const pageContent = ref<HTMLElement | null>(null)
const { isDark, initialize, toggle } = useTheme()
const { navOnDark } = useNavTheme()
onMounted(() => initialize())
useScrollReveal(pageContent)

const navigation = [
  { name: 'Product', to: '/gallery/website/product' },
  { name: 'Capabilities', to: '/gallery/website/capabilities' },
  { name: 'Partners', to: '/gallery/website/partners' },
  { name: 'Careers', to: '/gallery/website/careers' },
  { name: 'Company', to: '/gallery/website/company' },
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
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">

    <!-- NAVBAR -->
    <header class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      <nav class="mx-auto flex max-w-full items-center justify-between px-6 lg:px-8 h-16">
        <!-- Logo -->
        <RouterLink to="/gallery/website" class="flex items-center">
          <svg class="h-5 transition-colors duration-300" :class="navOnDark ? 'text-white' : 'text-zinc-900 dark:text-white'" viewBox="0 0 780 148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M138 146.168L121.894 102.5L92.3311 119.492L99.8761 141.892C100.747 144.45 103.104 146.168 105.789 146.168H138ZM50.87 107.287L129.875 81.8905C131.144 81.4886 132.486 82.1463 132.922 83.3522C133.321 84.485 132.885 85.764 131.833 86.3487L31.1007 144.231C28.9243 145.51 26.4214 146.168 23.9185 146.168H6.54325C1.90018 146.168 -1.25565 141.417 0.485501 137.105L54.0258 4.0927C55.0415 1.60785 57.4356 0 60.0836 0H79.5627C82.3195 0 84.7498 1.68093 85.693 4.27541L112.826 77.8344L81.7754 87.8103L71.655 57.6267C70.3491 53.7898 65.0168 53.6071 63.4933 57.3709L45.5015 101.44C44.123 104.875 47.3514 108.42 50.87 107.287ZM546.387 12.9949C546.387 8.39964 542.537 7.79893 536.807 9.50088L516.237 16.0784V34.4796H546.387V12.9949ZM317.937 70.4909V48.1552V48.1452H300.097V28.9532C300.097 24.3779 296.247 23.7773 290.517 25.4792L269.967 32.0567V48.1452H256.887V70.4809H269.947V118.947C269.857 125.544 271.187 131.01 273.927 135.345C276.667 139.68 280.607 142.874 285.727 144.916C290.837 146.949 296.977 147.83 304.107 147.529C307.807 147.359 310.957 146.959 313.597 146.348C316.227 145.737 318.277 145.187 319.717 144.726L315.127 122.781C314.447 122.961 313.447 123.151 312.137 123.392C310.807 123.632 309.547 123.752 308.307 123.752C306.617 123.752 305.147 123.502 303.917 122.991C302.687 122.481 301.737 121.62 301.077 120.408C300.427 119.187 300.097 117.555 300.097 115.463V70.4909H317.937ZM470.497 65.8356V51.8496C470.497 47.2543 466.637 46.6636 460.907 48.3555L441.247 54.6528V146.148H471.397V92.3661C471.397 88.4616 472.247 85.0177 473.977 82.0643C475.707 79.1109 478.047 76.7982 481.017 75.1463C483.977 73.4944 487.357 72.6535 491.147 72.6535C493.027 72.6535 495.137 72.8036 497.487 73.104C498.787 73.2641 500.017 73.5044 501.057 73.7347C501.907 73.9149 503.187 74.005 503.187 72.4933V49.9874C503.187 48.6459 502.327 47.6948 500.987 47.4545L500.786 47.4172C500.149 47.2984 499.501 47.1776 498.977 47.1141C497.457 46.9239 495.967 46.8338 494.527 46.8338C489.137 46.8338 484.397 48.4156 480.317 51.5592C476.247 54.7028 473.317 59.4583 471.527 65.8456H470.497V65.8356ZM378.737 148C368.537 148 359.747 145.968 352.387 141.903C345.027 137.838 339.357 132.032 335.407 124.483C331.457 116.934 329.477 107.944 329.477 97.5221C329.477 87.4004 331.457 78.5403 335.437 70.9515C339.417 63.3628 344.997 57.4561 352.227 53.2212C359.457 48.9863 367.967 46.8739 377.787 46.8739C384.627 46.8739 390.927 47.9451 396.657 50.0976C402.387 52.2401 407.367 55.4337 411.567 59.6686C415.767 63.9035 419.027 69.1194 421.357 75.3266C423.677 81.5337 424.827 88.7019 424.827 96.8313V104.56H359.277V105.221C359.277 109.426 360.097 113.09 361.737 116.224C363.377 119.357 365.687 121.77 368.677 123.502C371.667 125.234 375.227 126.085 379.357 126.085C382.157 126.085 384.717 125.694 387.027 124.904C389.347 124.113 391.327 122.951 392.987 121.399C394.637 119.848 395.887 117.966 396.737 115.753L424.407 116.764C424.417 116.764 424.417 116.764 424.427 116.774C424.427 116.774 424.437 116.774 424.437 116.784V116.794V116.814C423.247 123.141 420.657 128.628 416.667 133.293C412.677 137.979 407.477 141.603 401.057 144.176C394.607 146.719 387.177 148 378.737 148ZM361.847 77.9596C360.297 80.5626 359.447 83.4959 359.287 86.7597H396.707C396.667 83.2657 395.857 80.1821 394.297 77.489C392.717 74.7859 390.577 72.6735 387.837 71.1418C385.097 69.61 381.937 68.8491 378.377 68.8491C374.777 68.8491 371.507 69.6801 368.637 71.342C365.747 72.9839 363.487 75.2064 361.847 77.9596ZM516.247 146.148V48.1553H537.807H546.397V146.148H516.247ZM611.967 147.99C601.767 147.99 593.007 145.878 585.677 141.643C578.347 137.408 572.697 131.511 568.757 123.902C564.807 116.314 562.827 107.494 562.827 97.462C562.827 87.3804 564.807 78.5403 568.757 70.9515C572.707 63.3628 578.347 57.4561 585.677 53.2212C593.007 48.9863 601.767 46.8739 611.967 46.8739C622.157 46.8739 630.927 48.9863 638.257 53.2212C645.587 57.4561 651.227 63.3628 655.177 70.9515C659.127 78.5403 661.107 87.3804 661.107 97.462C661.107 107.504 659.127 116.314 655.177 123.902C651.227 131.491 645.587 137.408 638.257 141.643C630.927 145.888 622.157 147.99 611.967 147.99ZM612.157 125.094C616.057 125.094 619.357 123.912 622.057 121.56C624.757 119.207 626.807 115.923 628.237 111.728C629.667 107.544 630.367 102.728 630.367 97.2818C630.367 91.7955 629.647 86.9699 628.237 82.8051C626.807 78.6404 624.757 75.3566 622.057 72.9739C619.367 70.5911 616.057 69.4098 612.157 69.4098C608.117 69.4098 604.727 70.6012 601.967 72.9739C599.197 75.3666 597.107 78.6304 595.677 82.8051C594.247 86.9799 593.547 91.7955 593.547 97.2818C593.547 102.718 594.267 107.534 595.677 111.728C597.107 115.923 599.197 119.207 601.967 121.56C604.707 123.912 608.117 125.094 612.157 125.094ZM243.247 51.5693V146.148H214.437V128.027H213.427C211.267 133.944 207.577 138.639 202.377 142.163C197.177 145.667 190.907 147.429 183.607 147.429C176.937 147.429 171.077 145.908 166.047 142.864C161.017 139.821 157.097 135.546 154.327 130.039C151.547 124.533 150.127 118.056 150.087 110.607V54.6428L170.637 48.0852C176.367 46.3833 180.217 46.984 180.217 51.5792V104.81C180.257 110.207 181.687 114.492 184.517 117.635C187.347 120.779 191.207 122.361 196.087 122.361C199.227 122.361 202.087 121.65 204.667 120.218C207.247 118.786 209.297 116.724 210.847 114.001C212.397 111.288 213.157 107.934 213.107 103.979V54.6528L233.657 48.0953C239.397 46.3933 243.247 46.994 243.247 51.5693ZM706.207 51.5793C706.207 46.984 702.347 46.3933 696.617 48.0853L677.537 54.1823V146.158H707.687V90.0735C707.717 86.2391 708.447 82.9653 709.847 80.2122C711.247 77.469 713.227 75.3666 715.777 73.8849C718.327 72.4032 721.287 71.6824 724.637 71.6824C729.687 71.6824 733.647 73.2642 736.527 76.4078C739.387 79.5514 740.797 83.9064 740.757 89.4828V146.158H770.907V83.6962C770.947 76.2877 769.567 69.8303 766.767 64.3239C763.947 58.8176 760.007 54.5227 754.907 51.4692C749.817 48.4157 743.837 46.8739 737.007 46.8739C729.787 46.8739 723.557 48.5759 718.357 51.9697C713.157 55.3636 709.477 60.039 707.307 65.9458H706.217V52.3902V51.5793H706.207Z" fill="currentColor"/>
          </svg>
        </RouterLink>

        <!-- Desktop nav -->
        <div class="hidden lg:flex lg:items-center lg:gap-x-8">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            class="text-sm transition-colors duration-300"
            :class="navOnDark
              ? 'text-white/60 hover:text-white'
              : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white'"
            :active-class="navOnDark ? '!text-white' : '!text-zinc-900 dark:!text-white'"
          >{{ item.name }}</RouterLink>
        </div>

        <!-- Theme toggle -->
        <div class="hidden lg:flex lg:items-center">
          <button
            @click="toggle"
            class="p-1.5 transition-colors duration-300"
            :class="navOnDark
              ? 'text-white/60 hover:text-white'
              : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
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
        <button class="lg:hidden -m-2.5 p-2.5 transition-colors duration-300" :class="navOnDark ? 'text-white' : 'text-zinc-500'" @click="mobileMenuOpen = true">
          <Bars3Icon class="h-5 w-5" />
        </button>
      </nav>

      <!-- Mobile menu -->
      <Dialog :open="mobileMenuOpen" class="lg:hidden" @close="mobileMenuOpen = false">
        <div class="fixed inset-0 z-50 bg-black/10 dark:bg-black/40" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-zinc-950 overflow-y-auto">
          <div class="flex items-center justify-between px-6 h-16 border-b border-zinc-100 dark:border-zinc-900">
            <RouterLink to="/gallery/website" class="flex items-center">
              <svg class="h-5 text-zinc-900 dark:text-white" viewBox="0 0 780 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M138 146.168L121.894 102.5L92.3311 119.492L99.8761 141.892C100.747 144.45 103.104 146.168 105.789 146.168H138ZM50.87 107.287L129.875 81.8905C131.144 81.4886 132.486 82.1463 132.922 83.3522C133.321 84.485 132.885 85.764 131.833 86.3487L31.1007 144.231C28.9243 145.51 26.4214 146.168 23.9185 146.168H6.54325C1.90018 146.168 -1.25565 141.417 0.485501 137.105L54.0258 4.0927C55.0415 1.60785 57.4356 0 60.0836 0H79.5627C82.3195 0 84.7498 1.68093 85.693 4.27541L112.826 77.8344L81.7754 87.8103L71.655 57.6267C70.3491 53.7898 65.0168 53.6071 63.4933 57.3709L45.5015 101.44C44.123 104.875 47.3514 108.42 50.87 107.287Z" fill="currentColor"/>
              </svg>
            </RouterLink>
            <button class="-m-2.5 p-2.5 text-zinc-500" @click="mobileMenuOpen = false">
              <XMarkIcon class="h-5 w-5" />
            </button>
          </div>
          <div class="px-6 py-8 space-y-1">
            <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              class="block py-3 text-base text-zinc-900 dark:text-white border-b border-zinc-50 dark:border-zinc-900"
              @click="mobileMenuOpen = false"
            >{{ item.name }}</RouterLink>
            <button
              @click="toggle"
              class="flex w-full items-center gap-3 py-3 text-base text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
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

    <!-- Page content -->
    <div ref="pageContent">
      <RouterView />
    </div>

    <!-- FOOTER -->
    <footer class="border-t border-zinc-200 dark:border-zinc-800">
      <div class="mx-auto max-w-full px-6 lg:px-8 py-16 lg:py-20">
        <div class="lg:grid lg:grid-cols-6 lg:gap-8">
          <!-- Brand -->
          <div class="lg:col-span-2">
            <RouterLink to="/gallery/website" class="flex items-center">
              <svg class="h-5 text-zinc-900 dark:text-white" viewBox="0 0 780 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M138 146.168L121.894 102.5L92.3311 119.492L99.8761 141.892C100.747 144.45 103.104 146.168 105.789 146.168H138ZM50.87 107.287L129.875 81.8905C131.144 81.4886 132.486 82.1463 132.922 83.3522C133.321 84.485 132.885 85.764 131.833 86.3487L31.1007 144.231C28.9243 145.51 26.4214 146.168 23.9185 146.168H6.54325C1.90018 146.168 -1.25565 141.417 0.485501 137.105L54.0258 4.0927C55.0415 1.60785 57.4356 0 60.0836 0H79.5627C82.3195 0 84.7498 1.68093 85.693 4.27541L112.826 77.8344L81.7754 87.8103L71.655 57.6267C70.3491 53.7898 65.0168 53.6071 63.4933 57.3709L45.5015 101.44C44.123 104.875 47.3514 108.42 50.87 107.287Z" fill="currentColor"/>
              </svg>
            </RouterLink>
            <p class="mt-4 text-sm text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-xs">
              The platform for autonomous mass. Open architecture for coordinated swarms across air, land, and sea.
            </p>
            <div class="mt-8 flex gap-5">
              <a href="#" class="text-zinc-300 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="text-zinc-300 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
                <span class="sr-only">GitHub</span>
                <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
              </a>
            </div>
          </div>

          <!-- Link columns -->
          <div class="mt-14 lg:mt-0 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:col-span-4">
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">Product</p>
              <ul class="mt-5 space-y-3">
                <li v-for="link in footerNav.product" :key="link.name">
                  <a :href="link.href" class="text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">{{ link.name }}</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">Company</p>
              <ul class="mt-5 space-y-3">
                <li v-for="link in footerNav.company" :key="link.name">
                  <a :href="link.href" class="text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">{{ link.name }}</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">Resources</p>
              <ul class="mt-5 space-y-3">
                <li v-for="link in footerNav.resources" :key="link.name">
                  <a :href="link.href" class="text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">{{ link.name }}</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">Legal</p>
              <ul class="mt-5 space-y-3">
                <li v-for="link in footerNav.legal" :key="link.name">
                  <a :href="link.href" class="text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">{{ link.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p class="text-xs text-zinc-400 dark:text-zinc-500">&copy; {{ new Date().getFullYear() }} Auterion AG. All rights reserved.</p>
          <p class="text-xs text-zinc-400 dark:text-zinc-500">Zurich &middot; Arlington &middot; Kyiv</p>
        </div>
      </div>
    </footer>

  </div>
</template>
