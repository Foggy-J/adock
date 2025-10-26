<script setup>
import TopNav from '@/components/TopNav.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <TopNav />
    <RouterView />
  </div>
</template>
