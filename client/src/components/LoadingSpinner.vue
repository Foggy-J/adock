<script setup>
</script>

<template>
  <div class="loader ease-linear rounded-full border-8 border-t- border-t-primary border-base-200 h-16 w-16"></div>
</template>

<style scoped>
.loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>