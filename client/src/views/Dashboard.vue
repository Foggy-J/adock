<script setup>
import TopNav from '@/components/TopNav.vue'
import { RouterView, useRoute } from 'vue-router'
</script>

<template>
  <div class="container mx-auto min-h-screen">
    <TopNav />
    <div class="content mt-4 rounded-2xl p-8">
      <h1 class="title text-3xl font-bold mb-6 text-center">
        {{ useRoute().name }}
      </h1>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.title {
  background: linear-gradient(135deg, #f4acac 0%, #F54927 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content {
  background: rgba(30, 35, 45, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(244, 82, 73, 0.2);
  padding: 3rem 2rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(96, 165, 250, 0.1);
  transition: all 0.3s ease;
}

.content:hover {
  border-color: rgba(244, 82, 73, 0.4);
}
</style>
