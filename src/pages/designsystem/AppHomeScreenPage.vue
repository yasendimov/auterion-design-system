<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  GlobeAltIcon,
  MapIcon,
  SignalIcon,
  VideoCameraIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const navigation = [
  { name: 'Vehicles', href: '#', icon: CpuChipIcon, current: false },
  { name: 'Missions', href: '#', icon: MapIcon, current: true },
  { name: 'Telemetry', href: '#', icon: SignalIcon, current: false },
  { name: 'Payloads', href: '#', icon: VideoCameraIcon, current: false },
  { name: 'Airspace', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Analytics', href: '#', icon: ChartBarSquareIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]

const fleets = [
  { id: 1, name: 'Survey Fleet', href: '#', initial: 'S', current: false },
  { id: 2, name: 'Delivery Ops', href: '#', initial: 'D', current: false },
  { id: 3, name: 'Inspection Team', href: '#', initial: 'I', current: false },
]

type VehicleStatus = 'standby' | 'ok' | 'alarm' | 'warning' | 'caution'

const statuses: Record<VehicleStatus, string> = {
  standby: 'text-[--color-gray-6] bg-[--color-surface-2]',
  ok: 'text-[--color-ok] bg-[--color-ok-subtle]',
  alarm: 'text-[--color-alarm] bg-[--color-alarm-subtle]',
  warning: 'text-[--color-warning] bg-[--color-warning-subtle]',
  caution: 'text-[--color-caution] bg-[--color-caution-subtle]',
}

type HardwareType = 'Skynode X' | 'Skynode GX' | 'Skynode ENT'

const hardwareBadges: Record<HardwareType, string> = {
  'Skynode X': 'text-[--color-gray-9] bg-[--color-surface-2] ring-[--color-line]',
  'Skynode GX': 'text-[--color-primary-text] bg-[--color-primary-subtle] ring-[--color-primary-border]',
  'Skynode ENT': 'text-[--color-accent-text] bg-[--color-accent-subtle] ring-[--color-accent-border]',
}

interface Mission {
  id: number
  href: string
  missionName: string
  vehicleName: string
  status: VehicleStatus
  statusText: string
  missionType: string
  hardware: HardwareType
}

const missions: Mission[] = [
  {
    id: 1,
    href: '#',
    missionName: 'Area Survey — Grid Pattern',
    vehicleName: 'SF-Alto-04',
    status: 'standby',
    statusText: 'Preflight checklist pending',
    missionType: 'Photogrammetry survey',
    hardware: 'Skynode X',
  },
  {
    id: 2,
    href: '#',
    missionName: 'Corridor Delivery — Route North',
    vehicleName: 'DO-Carrier-11',
    status: 'ok',
    statusText: 'In-flight — ETA 12 min',
    missionType: 'Autonomous corridor flight',
    hardware: 'Skynode GX',
  },
  {
    id: 3,
    href: '#',
    missionName: 'Vertical Structure Scan',
    vehicleName: 'IT-Scout-07',
    status: 'ok',
    statusText: 'In-flight — 68% complete',
    missionType: 'Infrastructure inspection',
    hardware: 'Skynode ENT',
  },
  {
    id: 4,
    href: '#',
    missionName: 'Perimeter Orbital — Zone B',
    vehicleName: 'SF-Alto-02',
    status: 'ok',
    statusText: 'Orbit 3 of 5',
    missionType: 'Orbital surveillance pattern',
    hardware: 'Skynode X',
  },
  {
    id: 5,
    href: '#',
    missionName: 'Long-Range Cargo — Site Delta',
    vehicleName: 'DO-Carrier-03',
    status: 'caution',
    statusText: 'Battery 22% — RTL triggered',
    missionType: 'Beyond visual line of sight',
    hardware: 'Skynode GX',
  },
  {
    id: 6,
    href: '#',
    missionName: 'Solar Farm Survey — West',
    vehicleName: 'SF-Alto-06',
    status: 'standby',
    statusText: 'Completed 3h ago',
    missionType: 'Area survey with Sony payload',
    hardware: 'Skynode X',
  },
  {
    id: 7,
    href: '#',
    missionName: 'Bridge Inspection — Span 3',
    vehicleName: 'IT-Scout-02',
    status: 'alarm',
    statusText: 'Lost link — last seen 6m ago',
    missionType: 'Close-range structure scan',
    hardware: 'Skynode ENT',
  },
  {
    id: 8,
    href: '#',
    missionName: 'Corridor Delivery — Route East',
    vehicleName: 'DO-Carrier-08',
    status: 'warning',
    statusText: 'GPS degraded — holding position',
    missionType: 'Autonomous corridor flight',
    hardware: 'Skynode GX',
  },
]

interface ActivityItem {
  operator: { name: string; imageUrl: string }
  vehicleName: string
  action: string
  detail: string
  date: string
  dateTime: string
}

const activityItems: ActivityItem[] = [
  {
    operator: { name: 'Elena Torres', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    vehicleName: 'DO-Carrier-11',
    action: 'Mission launched',
    detail: 'Corridor Delivery — Route North',
    date: '12m',
    dateTime: '2026-03-11T14:48',
  },
  {
    operator: { name: 'Marcus Chen', imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    vehicleName: 'IT-Scout-07',
    action: 'Preflight passed',
    detail: 'Vertical Structure Scan',
    date: '28m',
    dateTime: '2026-03-11T14:32',
  },
  {
    operator: { name: 'Sofia Andersen', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    vehicleName: 'SF-Alto-06',
    action: 'Mission completed',
    detail: 'Solar Farm Survey — 847 images captured',
    date: '3h',
    dateTime: '2026-03-11T12:00',
  },
  {
    operator: { name: 'Marcus Chen', imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    vehicleName: 'IT-Scout-02',
    action: 'Link lost',
    detail: 'Bridge Inspection — failsafe RTL initiated',
    date: '6h',
    dateTime: '2026-03-11T09:00',
  },
  {
    operator: { name: 'Elena Torres', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    vehicleName: 'DO-Carrier-03',
    action: 'Firmware updated',
    detail: 'AuterionOS v3.4.1 → v3.5.0',
    date: '1d',
    dateTime: '2026-03-10T16:30',
  },
  {
    operator: { name: 'Sofia Andersen', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    vehicleName: 'SF-Alto-04',
    action: 'Vehicle activated',
    detail: 'Added to Survey Fleet via Auterion Suite',
    date: '2d',
    dateTime: '2026-03-09T10:15',
  },
  {
    operator: { name: 'Marcus Chen', imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    vehicleName: 'DO-Carrier-08',
    action: 'Mission uploaded',
    detail: 'Corridor Delivery — Route East via AMC',
    date: '3d',
    dateTime: '2026-03-08T14:00',
  },
  {
    operator: { name: 'Lukas Weber', imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    vehicleName: 'SF-Alto-02',
    action: 'Payload configured',
    detail: 'Sony ILX-LR1 — interval 2s, nadir',
    date: '5d',
    dateTime: '2026-03-06T09:00',
  },
]

const sidebarOpen = ref(false)
</script>

<template>
  <div class="h-full bg-[--color-page] text-[--color-high]">
    <!-- Mobile sidebar -->
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 xl:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="" leave="transition-opacity ease-linear duration-300" leave-from="" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/80"></div>
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="" leave="ease-in-out duration-300" leave-from="" leave-to="opacity-0">
                <div class="absolute top-0 left-full flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>

              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-[--color-surface-1] px-6 ring-1 ring-[--color-line]">
                <div class="flex h-16 shrink-0 items-center gap-3">
                  <svg class="h-5 shrink-0 text-[--color-high]" viewBox="0 0 780 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M138 146.168L121.894 102.5L92.3311 119.492L99.8761 141.892C100.747 144.45 103.104 146.168 105.789 146.168H138ZM50.87 107.287L129.875 81.8905C131.144 81.4886 132.486 82.1463 132.922 83.3522C133.321 84.485 132.885 85.764 131.833 86.3487L31.1007 144.231C28.9243 145.51 26.4214 146.168 23.9185 146.168H6.54325C1.90018 146.168 -1.25565 141.417 0.485501 137.105L54.0258 4.0927C55.0415 1.60785 57.4356 0 60.0836 0H79.5627C82.3195 0 84.7498 1.68093 85.693 4.27541L112.826 77.8344L81.7754 87.8103L71.655 57.6267C70.3491 53.7898 65.0168 53.6071 63.4933 57.3709L45.5015 101.44C44.123 104.875 47.3514 108.42 50.87 107.287ZM546.387 12.9949C546.387 8.39964 542.537 7.79893 536.807 9.50088L516.237 16.0784V34.4796H546.387V12.9949ZM317.937 70.4909V48.1552V48.1452H300.097V28.9532C300.097 24.3779 296.247 23.7773 290.517 25.4792L269.967 32.0567V48.1452H256.887V70.4809H269.947V118.947C269.857 125.544 271.187 131.01 273.927 135.345C276.667 139.68 280.607 142.874 285.727 144.916C290.837 146.949 296.977 147.83 304.107 147.529C307.807 147.359 310.957 146.959 313.597 146.348C316.227 145.737 318.277 145.187 319.717 144.726L315.127 122.781C314.447 122.961 313.447 123.151 312.137 123.392C310.807 123.632 309.547 123.752 308.307 123.752C306.617 123.752 305.147 123.502 303.917 122.991C302.687 122.481 301.737 121.62 301.077 120.408C300.427 119.187 300.097 117.555 300.097 115.463V70.4909H317.937ZM470.497 65.8356V51.8496C470.497 47.2543 466.637 46.6636 460.907 48.3555L441.247 54.6528V146.148H471.397V92.3661C471.397 88.4616 472.247 85.0177 473.977 82.0643C475.707 79.1109 478.047 76.7982 481.017 75.1463C483.977 73.4944 487.357 72.6535 491.147 72.6535C493.027 72.6535 495.137 72.8036 497.487 73.104C498.787 73.2641 500.017 73.5044 501.057 73.7347C501.907 73.9149 503.187 74.005 503.187 72.4933V49.9874C503.187 48.6459 502.327 47.6948 500.987 47.4545L500.786 47.4172C500.149 47.2984 499.501 47.1776 498.977 47.1141C497.457 46.9239 495.967 46.8338 494.527 46.8338C489.137 46.8338 484.397 48.4156 480.317 51.5592C476.247 54.7028 473.317 59.4583 471.527 65.8456H470.497V65.8356ZM378.737 148C368.537 148 359.747 145.968 352.387 141.903C345.027 137.838 339.357 132.032 335.407 124.483C331.457 116.934 329.477 107.944 329.477 97.5221C329.477 87.4004 331.457 78.5403 335.437 70.9515C339.417 63.3628 344.997 57.4561 352.227 53.2212C359.457 48.9863 367.967 46.8739 377.787 46.8739C384.627 46.8739 390.927 47.9451 396.657 50.0976C402.387 52.2401 407.367 55.4337 411.567 59.6686C415.767 63.9035 419.027 69.1194 421.357 75.3266C423.677 81.5337 424.827 88.7019 424.827 96.8313V104.56H359.277V105.221C359.277 109.426 360.097 113.09 361.737 116.224C363.377 119.357 365.687 121.77 368.677 123.502C371.667 125.234 375.227 126.085 379.357 126.085C382.157 126.085 384.717 125.694 387.027 124.904C389.347 124.113 391.327 122.951 392.987 121.399C394.637 119.848 395.887 117.966 396.737 115.753L424.407 116.764C424.417 116.764 424.417 116.764 424.427 116.774C424.427 116.774 424.437 116.774 424.437 116.784V116.794V116.814C423.247 123.141 420.657 128.628 416.667 133.293C412.677 137.979 407.477 141.603 401.057 144.176C394.607 146.719 387.177 148 378.737 148ZM361.847 77.9596C360.297 80.5626 359.447 83.4959 359.287 86.7597H396.707C396.667 83.2657 395.857 80.1821 394.297 77.489C392.717 74.7859 390.577 72.6735 387.837 71.1418C385.097 69.61 381.937 68.8491 378.377 68.8491C374.777 68.8491 371.507 69.6801 368.637 71.342C365.747 72.9839 363.487 75.2064 361.847 77.9596ZM516.247 146.148V48.1553H537.807H546.397V146.148H516.247ZM611.967 147.99C601.767 147.99 593.007 145.878 585.677 141.643C578.347 137.408 572.697 131.511 568.757 123.902C564.807 116.314 562.827 107.494 562.827 97.462C562.827 87.3804 564.807 78.5403 568.757 70.9515C572.707 63.3628 578.347 57.4561 585.677 53.2212C593.007 48.9863 601.767 46.8739 611.967 46.8739C622.157 46.8739 630.927 48.9863 638.257 53.2212C645.587 57.4561 651.227 63.3628 655.177 70.9515C659.127 78.5403 661.107 87.3804 661.107 97.462C661.107 107.504 659.127 116.314 655.177 123.902C651.227 131.491 645.587 137.408 638.257 141.643C630.927 145.888 622.157 147.99 611.967 147.99ZM612.157 125.094C616.057 125.094 619.357 123.912 622.057 121.56C624.757 119.207 626.807 115.923 628.237 111.728C629.667 107.544 630.367 102.728 630.367 97.2818C630.367 91.7955 629.647 86.9699 628.237 82.8051C626.807 78.6404 624.757 75.3566 622.057 72.9739C619.367 70.5911 616.057 69.4098 612.157 69.4098C608.117 69.4098 604.727 70.6012 601.967 72.9739C599.197 75.3666 597.107 78.6304 595.677 82.8051C594.247 86.9799 593.547 91.7955 593.547 97.2818C593.547 102.718 594.267 107.534 595.677 111.728C597.107 115.923 599.197 119.207 601.967 121.56C604.707 123.912 608.117 125.094 612.157 125.094ZM243.247 51.5693V146.148H214.437V128.027H213.427C211.267 133.944 207.577 138.639 202.377 142.163C197.177 145.667 190.907 147.429 183.607 147.429C176.937 147.429 171.077 145.908 166.047 142.864C161.017 139.821 157.097 135.546 154.327 130.039C151.547 124.533 150.127 118.056 150.087 110.607V54.6428L170.637 48.0852C176.367 46.3833 180.217 46.984 180.217 51.5792V104.81C180.257 110.207 181.687 114.492 184.517 117.635C187.347 120.779 191.207 122.361 196.087 122.361C199.227 122.361 202.087 121.65 204.667 120.218C207.247 118.786 209.297 116.724 210.847 114.001C212.397 111.288 213.157 107.934 213.107 103.979V54.6528L233.657 48.0953C239.397 46.3933 243.247 46.994 243.247 51.5693ZM706.207 51.5793C706.207 46.984 702.347 46.3933 696.617 48.0853L677.537 54.1823V146.158H707.687V90.0735C707.717 86.2391 708.447 82.9653 709.847 80.2122C711.247 77.469 713.227 75.3666 715.777 73.8849C718.327 72.4032 721.287 71.6824 724.637 71.6824C729.687 71.6824 733.647 73.2642 736.527 76.4078C739.387 79.5514 740.797 83.9064 740.757 89.4828V146.158H770.907V83.6962C770.947 76.2877 769.567 69.8303 766.767 64.3239C763.947 58.8176 760.007 54.5227 754.907 51.4692C749.817 48.4157 743.837 46.8739 737.007 46.8739C729.787 46.8739 723.557 48.5759 718.357 51.9697C713.157 55.3636 709.477 60.039 707.307 65.9458H706.217V52.3902V51.5793H706.207Z" fill="currentColor"/>
                  </svg>
                  <span class="text-xs font-medium text-[--color-low]">Suite</span>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a :href="item.href" :class="[item.current ? 'bg-[--color-primary-subtle] text-[--color-primary]' : 'text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-primary]', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                            <component :is="item.icon" :class="[item.current ? 'text-[--color-primary]' : 'text-[--color-gray-6] group-hover:text-[--color-primary]', 'size-6 shrink-0']" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="text-xs/6 font-semibold text-[--color-gray-6]">Your fleets</div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="fleet in fleets" :key="fleet.name">
                          <a :href="fleet.href" :class="[fleet.current ? 'bg-[--color-primary-subtle] text-[--color-primary]' : 'text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-primary]', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                            <span :class="[fleet.current ? 'border-[--color-primary-border] text-[--color-primary]' : 'border-[--color-line] text-[--color-gray-6] group-hover:border-[--color-primary-border] group-hover:text-[--color-primary]', 'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-[--color-surface-1] text-[0.625rem] font-medium']">{{ fleet.initial }}</span>
                            <span class="truncate">{{ fleet.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="-mx-6 mt-auto">
                      <a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-[--color-high] hover:bg-[--color-surface-2]">
                        <img class="size-8 rounded-full bg-[--color-surface-2] outline -outline-offset-1 outline-[--color-line]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <span class="sr-only">Your profile</span>
                        <span aria-hidden="true">Marcus Chen</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-[--color-surface-1] px-6 ring-1 ring-[--color-line]">
        <div class="flex h-16 shrink-0 items-center gap-3">
          <svg class="h-5 shrink-0 text-[--color-high]" viewBox="0 0 780 148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M138 146.168L121.894 102.5L92.3311 119.492L99.8761 141.892C100.747 144.45 103.104 146.168 105.789 146.168H138ZM50.87 107.287L129.875 81.8905C131.144 81.4886 132.486 82.1463 132.922 83.3522C133.321 84.485 132.885 85.764 131.833 86.3487L31.1007 144.231C28.9243 145.51 26.4214 146.168 23.9185 146.168H6.54325C1.90018 146.168 -1.25565 141.417 0.485501 137.105L54.0258 4.0927C55.0415 1.60785 57.4356 0 60.0836 0H79.5627C82.3195 0 84.7498 1.68093 85.693 4.27541L112.826 77.8344L81.7754 87.8103L71.655 57.6267C70.3491 53.7898 65.0168 53.6071 63.4933 57.3709L45.5015 101.44C44.123 104.875 47.3514 108.42 50.87 107.287ZM546.387 12.9949C546.387 8.39964 542.537 7.79893 536.807 9.50088L516.237 16.0784V34.4796H546.387V12.9949ZM317.937 70.4909V48.1552V48.1452H300.097V28.9532C300.097 24.3779 296.247 23.7773 290.517 25.4792L269.967 32.0567V48.1452H256.887V70.4809H269.947V118.947C269.857 125.544 271.187 131.01 273.927 135.345C276.667 139.68 280.607 142.874 285.727 144.916C290.837 146.949 296.977 147.83 304.107 147.529C307.807 147.359 310.957 146.959 313.597 146.348C316.227 145.737 318.277 145.187 319.717 144.726L315.127 122.781C314.447 122.961 313.447 123.151 312.137 123.392C310.807 123.632 309.547 123.752 308.307 123.752C306.617 123.752 305.147 123.502 303.917 122.991C302.687 122.481 301.737 121.62 301.077 120.408C300.427 119.187 300.097 117.555 300.097 115.463V70.4909H317.937ZM470.497 65.8356V51.8496C470.497 47.2543 466.637 46.6636 460.907 48.3555L441.247 54.6528V146.148H471.397V92.3661C471.397 88.4616 472.247 85.0177 473.977 82.0643C475.707 79.1109 478.047 76.7982 481.017 75.1463C483.977 73.4944 487.357 72.6535 491.147 72.6535C493.027 72.6535 495.137 72.8036 497.487 73.104C498.787 73.2641 500.017 73.5044 501.057 73.7347C501.907 73.9149 503.187 74.005 503.187 72.4933V49.9874C503.187 48.6459 502.327 47.6948 500.987 47.4545L500.786 47.4172C500.149 47.2984 499.501 47.1776 498.977 47.1141C497.457 46.9239 495.967 46.8338 494.527 46.8338C489.137 46.8338 484.397 48.4156 480.317 51.5592C476.247 54.7028 473.317 59.4583 471.527 65.8456H470.497V65.8356ZM378.737 148C368.537 148 359.747 145.968 352.387 141.903C345.027 137.838 339.357 132.032 335.407 124.483C331.457 116.934 329.477 107.944 329.477 97.5221C329.477 87.4004 331.457 78.5403 335.437 70.9515C339.417 63.3628 344.997 57.4561 352.227 53.2212C359.457 48.9863 367.967 46.8739 377.787 46.8739C384.627 46.8739 390.927 47.9451 396.657 50.0976C402.387 52.2401 407.367 55.4337 411.567 59.6686C415.767 63.9035 419.027 69.1194 421.357 75.3266C423.677 81.5337 424.827 88.7019 424.827 96.8313V104.56H359.277V105.221C359.277 109.426 360.097 113.09 361.737 116.224C363.377 119.357 365.687 121.77 368.677 123.502C371.667 125.234 375.227 126.085 379.357 126.085C382.157 126.085 384.717 125.694 387.027 124.904C389.347 124.113 391.327 122.951 392.987 121.399C394.637 119.848 395.887 117.966 396.737 115.753L424.407 116.764C424.417 116.764 424.417 116.764 424.427 116.774C424.427 116.774 424.437 116.774 424.437 116.784V116.794V116.814C423.247 123.141 420.657 128.628 416.667 133.293C412.677 137.979 407.477 141.603 401.057 144.176C394.607 146.719 387.177 148 378.737 148ZM361.847 77.9596C360.297 80.5626 359.447 83.4959 359.287 86.7597H396.707C396.667 83.2657 395.857 80.1821 394.297 77.489C392.717 74.7859 390.577 72.6735 387.837 71.1418C385.097 69.61 381.937 68.8491 378.377 68.8491C374.777 68.8491 371.507 69.6801 368.637 71.342C365.747 72.9839 363.487 75.2064 361.847 77.9596ZM516.247 146.148V48.1553H537.807H546.397V146.148H516.247ZM611.967 147.99C601.767 147.99 593.007 145.878 585.677 141.643C578.347 137.408 572.697 131.511 568.757 123.902C564.807 116.314 562.827 107.494 562.827 97.462C562.827 87.3804 564.807 78.5403 568.757 70.9515C572.707 63.3628 578.347 57.4561 585.677 53.2212C593.007 48.9863 601.767 46.8739 611.967 46.8739C622.157 46.8739 630.927 48.9863 638.257 53.2212C645.587 57.4561 651.227 63.3628 655.177 70.9515C659.127 78.5403 661.107 87.3804 661.107 97.462C661.107 107.504 659.127 116.314 655.177 123.902C651.227 131.491 645.587 137.408 638.257 141.643C630.927 145.888 622.157 147.99 611.967 147.99ZM612.157 125.094C616.057 125.094 619.357 123.912 622.057 121.56C624.757 119.207 626.807 115.923 628.237 111.728C629.667 107.544 630.367 102.728 630.367 97.2818C630.367 91.7955 629.647 86.9699 628.237 82.8051C626.807 78.6404 624.757 75.3566 622.057 72.9739C619.367 70.5911 616.057 69.4098 612.157 69.4098C608.117 69.4098 604.727 70.6012 601.967 72.9739C599.197 75.3666 597.107 78.6304 595.677 82.8051C594.247 86.9799 593.547 91.7955 593.547 97.2818C593.547 102.718 594.267 107.534 595.677 111.728C597.107 115.923 599.197 119.207 601.967 121.56C604.707 123.912 608.117 125.094 612.157 125.094ZM243.247 51.5693V146.148H214.437V128.027H213.427C211.267 133.944 207.577 138.639 202.377 142.163C197.177 145.667 190.907 147.429 183.607 147.429C176.937 147.429 171.077 145.908 166.047 142.864C161.017 139.821 157.097 135.546 154.327 130.039C151.547 124.533 150.127 118.056 150.087 110.607V54.6428L170.637 48.0852C176.367 46.3833 180.217 46.984 180.217 51.5792V104.81C180.257 110.207 181.687 114.492 184.517 117.635C187.347 120.779 191.207 122.361 196.087 122.361C199.227 122.361 202.087 121.65 204.667 120.218C207.247 118.786 209.297 116.724 210.847 114.001C212.397 111.288 213.157 107.934 213.107 103.979V54.6528L233.657 48.0953C239.397 46.3933 243.247 46.994 243.247 51.5693ZM706.207 51.5793C706.207 46.984 702.347 46.3933 696.617 48.0853L677.537 54.1823V146.158H707.687V90.0735C707.717 86.2391 708.447 82.9653 709.847 80.2122C711.247 77.469 713.227 75.3666 715.777 73.8849C718.327 72.4032 721.287 71.6824 724.637 71.6824C729.687 71.6824 733.647 73.2642 736.527 76.4078C739.387 79.5514 740.797 83.9064 740.757 89.4828V146.158H770.907V83.6962C770.947 76.2877 769.567 69.8303 766.767 64.3239C763.947 58.8176 760.007 54.5227 754.907 51.4692C749.817 48.4157 743.837 46.8739 737.007 46.8739C729.787 46.8739 723.557 48.5759 718.357 51.9697C713.157 55.3636 709.477 60.039 707.307 65.9458H706.217V52.3902V51.5793H706.207Z" fill="currentColor"/>
          </svg>
          <span class="text-xs font-medium text-[--color-low]">Suite</span>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a :href="item.href" :class="[item.current ? 'bg-[--color-primary-subtle] text-[--color-primary]' : 'text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-primary]', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                    <component :is="item.icon" :class="[item.current ? 'text-[--color-primary]' : 'text-[--color-gray-6] group-hover:text-[--color-primary]', 'size-6 shrink-0']" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs/6 font-semibold text-[--color-gray-6]">Your fleets</div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="fleet in fleets" :key="fleet.name">
                  <a :href="fleet.href" :class="[fleet.current ? 'bg-[--color-primary-subtle] text-[--color-primary]' : 'text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-primary]', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                    <span :class="[fleet.current ? 'border-[--color-primary-border] text-[--color-primary]' : 'border-[--color-line] text-[--color-gray-6] group-hover:border-[--color-primary-border] group-hover:text-[--color-primary]', 'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-[--color-surface-1] text-[0.625rem] font-medium']">{{ fleet.initial }}</span>
                    <span class="truncate">{{ fleet.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="-mx-6 mt-auto">
              <a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-[--color-high] hover:bg-[--color-surface-2]">
                <img class="size-8 rounded-full bg-[--color-surface-2] outline -outline-offset-1 outline-[--color-line]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">Marcus Chen</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="xl:pl-72">
      <!-- Sticky search header -->
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-[--color-line] bg-[--color-page] px-4 shadow-xs sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-[--color-high] xl:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="size-5" aria-hidden="true" />
        </button>

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="grid flex-1 grid-cols-1" action="#" method="GET">
            <input name="search" aria-label="Search" class="col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-[--color-high] outline-hidden placeholder:text-[--color-gray-6] sm:text-sm/6" placeholder="Search vehicles, missions..." />
            <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 size-5 self-center text-[--color-gray-6]" aria-hidden="true" />
          </form>
        </div>
      </div>

      <main class="lg:pr-96">
        <header class="flex items-center justify-between border-b border-[--color-line] px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <h1 class="text-base/7 font-semibold text-[--color-high]">Active Missions</h1>

          <!-- Sort dropdown -->
          <Menu as="div" class="relative">
            <MenuButton class="flex items-center gap-x-1 text-sm/6 font-medium text-[--color-high]">
              Sort by
              <ChevronUpDownIcon class="size-5 text-[--color-gray-6]" aria-hidden="true" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-[--color-surface-2] py-2 shadow-lg outline-1 outline-[--color-line]">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-[--color-surface-3]' : '', 'block px-3 py-1 text-sm/6 text-[--color-high]']">Vehicle</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-[--color-surface-3]' : '', 'block px-3 py-1 text-sm/6 text-[--color-high]']">Last updated</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-[--color-surface-3]' : '', 'block px-3 py-1 text-sm/6 text-[--color-high]']">Status</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-[--color-surface-3]' : '', 'block px-3 py-1 text-sm/6 text-[--color-high]']">Hardware</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </header>

        <!-- Mission list -->
        <ul role="list" class="divide-y divide-[--color-line]">
          <li v-for="mission in missions" :key="mission.id" class="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8">
            <div class="min-w-0 flex-auto">
              <div class="flex items-center gap-x-3">
                <div :class="[statuses[mission.status], 'flex-none rounded-full p-1']">
                  <div class="size-2 rounded-full bg-current"></div>
                </div>
                <h2 class="min-w-0 text-sm/6 font-semibold text-[--color-high]">
                  <a :href="mission.href" class="flex gap-x-2">
                    <span class="truncate font-mono text-[--color-low]">{{ mission.vehicleName }}</span>
                    <span class="text-[--color-gray-5]">/</span>
                    <span class="whitespace-nowrap">{{ mission.missionName }}</span>
                    <span class="absolute inset-0"></span>
                  </a>
                </h2>
              </div>
              <div class="mt-3 flex items-center gap-x-2.5 text-xs/5 text-[--color-low]">
                <p class="truncate">{{ mission.missionType }}</p>
                <svg viewBox="0 0 2 2" class="size-0.5 flex-none fill-[--color-gray-5]">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <p class="whitespace-nowrap">{{ mission.statusText }}</p>
              </div>
            </div>
            <div :class="[hardwareBadges[mission.hardware], 'flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset']">{{ mission.hardware }}</div>
            <ChevronRightIcon class="size-5 flex-none text-[--color-gray-6]" aria-hidden="true" />
          </li>
        </ul>
      </main>

      <!-- Activity feed -->
      <aside class="bg-[--color-surface-1] lg:fixed lg:top-16 lg:right-0 lg:bottom-0 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-[--color-line]">
        <header class="flex items-center justify-between border-b border-[--color-line] px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <h2 class="text-base/7 font-semibold text-[--color-high]">Fleet Activity</h2>
          <a href="#" class="text-sm/6 font-semibold text-[--color-primary]">View all</a>
        </header>
        <ul role="list" class="divide-y divide-[--color-line]">
          <li v-for="item in activityItems" :key="item.dateTime" class="px-4 py-4 sm:px-6 lg:px-8">
            <div class="flex items-center gap-x-3">
              <img :src="item.operator.imageUrl" alt="" class="size-6 flex-none rounded-full bg-[--color-surface-2] outline -outline-offset-1 outline-[--color-line]" />
              <h3 class="flex-auto truncate text-sm/6 font-semibold text-[--color-high]">{{ item.operator.name }}</h3>
              <time :datetime="item.dateTime" class="flex-none text-xs text-[--color-gray-6]">{{ item.date }}</time>
            </div>
            <p class="mt-3 truncate text-sm text-[--color-low]">
              {{ item.action }} on <span class="font-mono text-[--color-high]">{{ item.vehicleName }}</span> — <span class="text-[--color-high]">{{ item.detail }}</span>
            </p>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>
