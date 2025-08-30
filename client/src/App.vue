<script setup>
import { RouterView, RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';

// Mobile navigation toggle state
const isMobileNavOpen = ref(false);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-8" v-if="useRoute().name !== 'Login'">
    <div class="col-span-1 md:col-span-1">
      <!-- Desktop Nav -->
      <nav class="sidebar dark:bg-dark md:min-h-dvh hidden md:grid grid-rows-3 justify-between items-center">
        <div>
          <img src="/user-icon.png" alt="User Icon" class="mx-auto hidden md:block w-1/2 h-1/2 bg-white rounded-full">
          <ul class="mt-4 text-white">
            <li class="text-center text-xl font-bold">
              <RouterLink to="/profile" class="hover:underline">FULL NAME</RouterLink>
            </li>
            <li class="text-center text-xs text-gray-400">EMAIL</li>
            <li class="mt-4">
              <RouterLink to="/dashboard" class="block text-center text-gray-300 hover:underline">Dashboard</RouterLink>
            </li>
          </ul>
        </div>
        <ul>
          <li class="text-sm text-center text-gray-400">Categories</li>
        </ul>
        <ul class="mt-4 text-white">
          <li>
            <RouterLink to="/admin" class="block text-center text-gray-300 hover:underline">Admin</RouterLink>
          </li>
          <li class="mt-4 border border-red-500 rounded px-2 py-1 text-center w-fit mx-auto bg-red-600 text-white hover:bg-red-500 transition">
            <RouterLink to="/logout">Logout</RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile Nav -->
      <nav class="sidebar dark:bg-dark md:hidden p-4" :class="{ 'hidden': !isMobileNavOpen }">
        <ul class="text-white">
          <li class="text-center text-xl font-bold">USERNAME</li>
          <li class="text-center text-xs text-gray-400">EMAIL</li>
          <li class="mt-2">
            <RouterLink to="/dashboard" class="block text-center text-gray-300">Dashboard</RouterLink>
          </li>
          <li class="mt-2">
            <RouterLink to="/profile" class="block text-center text-gray-300">Profile</RouterLink>
          </li>
          <li class="mt-2 border border-red-500 rounded px-2 py-1 text-center w-fit mx-auto bg-red-600 text-white hover:bg-red-500 transition">
            <RouterLink to="/logout">Logout</RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Body -->
    <div class="col-span-1 md:col-span-7">
      <nav class="topnav p-4 text-white flex items-center justify-end gap-x-2">
        <h1 class="text-2xl font-bold mr-2">{{ useRoute().name }}</h1>
        <button class="md:hidden text-white cursor-pointer p-2 rounded bg-blue-800 w-fit" @click="isMobileNavOpen = !isMobileNavOpen">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
      <RouterView />
    </div>
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<style>
@media screen and (max-width: 768px) {
  body {
    background-color: #f0f0f0
  }
}

@media screen and (min-width: 768px) {
  body {
    background: linear-gradient(to bottom right, #ffffff, #f0f0f0);
  }
}

.sidebar {
  background: linear-gradient(to bottom, #00377e, #0056a0);
}

.topnav {
  background-color: #00377e;
}
</style>