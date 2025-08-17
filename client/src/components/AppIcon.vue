<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
    <a :href="props.link">
      <div class="items-center p-4 shadow rounded-lg bg-white hover:bg-gray-200 transitio duration-300 hover:cursor-pointer">
          <img :src="`/user-icon.png`" alt="App Icon" class="w-12 h-12 mx-auto">
          <p class="text-lg font-semibold text-center mt-2 overflow-hidden truncate">{{ props.title }}</p>
          <p class="text-sm text-center text-gray-400 overflow-hidden truncate">{{ props.category ? props.category : '-' }}</p>
      </div>
    </a>
</template>