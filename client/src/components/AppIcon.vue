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
        <div class="app items-center p-4 rounded-2xl">
            <img :src=props.icon alt="App Icon" class="w-10 h-10 mx-auto" />
            <p class="text-gray-300 text-lg font-semibold text-center mt-2 overflow-hidden truncate text-primary">{{ props.title }}</p>
            <p class="text-gray-500 text-sm text-center overflow-hidden truncate text-accent">{{ props.category ? props.category : '-' }}</p>
        </div>
    </a>
</template>

<style scoped>
.app {
  background: rgba(30, 35, 45, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(244, 82, 73, 0.2);
  padding: 3rem 2rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(96, 165, 250, 0.1);
  transition: all 0.3s ease;
}

.app:hover {
  border-color: rgba(244, 82, 73, 0.4);
}
</style>