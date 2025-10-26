<script setup>
import { RouterLink, useRoute } from 'vue-router';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faCircleUser, faWrench, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <!-- Mobile Displays -->
    <div class="dock dock-xs sm:hidden">
        <RouterLink to="/" :class="{'dock-active': useRoute().name === 'Apps'}">
            <button>
                <FontAwesomeIcon :icon="faHome" class="size-[1.2em]" />
            </button>
        </RouterLink>

        <RouterLink to="/profile" :class="{'dock-active': useRoute().name === 'Profile'}">
            <button>
                <FontAwesomeIcon :icon="faCircleUser" class="size-[1.2em]" />
            </button>
        </RouterLink>

        <RouterLink to="/admin" :class="{'dock-active': useRoute().name === 'Admin'}">
            <button>
                <FontAwesomeIcon :icon="faWrench" class="size-[1.2em]" />
            </button>
        </RouterLink>
    </div>

    <!-- Desktop Displays -->
    <nav class="p-4 hidden md:flex justify-end">
        <ul class="menu bg-base-200 menu-horizontal rounded-box">
            <li>
                <RouterLink to="/" :class="{ 'menu-active': useRoute().name === 'Apps' }">
                    <FontAwesomeIcon :icon="faHome" size="lg" class="-mr-0.5" />
                    Dashboard
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/profile" :class="{ 'menu-active': useRoute().name === 'Profile' }">
                    <FontAwesomeIcon :icon="faCircleUser" size="lg" class="-mr-0.5" />
                    USERNAME
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/admin" :class="{ 'menu-active': useRoute().name === 'Admin' }">
                    <FontAwesomeIcon :icon="faWrench" size="lg" class="-mr-0.5" />
                    Admin
                </RouterLink>
            </li>
            <li class="hover:bg-red-700 transition transition-duration-300 rounded-sm">
                <a>
                    <FontAwesomeIcon :icon="faRightFromBracket" size="lg" class="-mr-0.5" />
                    Logout
                </a>
            </li>
        </ul>
    </nav>
</template>