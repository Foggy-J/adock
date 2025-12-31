<script setup>
import { RouterView } from 'vue-router';
import ReactiveBackground from './components/ReactiveBackground.vue';
</script>

<template>
  <ReactiveBackground />
  <RouterView />
</template>

<style>
/* Primary Button */
.primary-btn {
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #F54927 0%, #F5276C 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(245, 73, 39, 0.4);
  position: relative;
  overflow: hidden;
}

.primary-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.primary-btn:hover::before {
  left: 100%;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(245, 73, 39, 0.5);
}

.primary-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(245, 73, 39, 0.3);
}
</style>