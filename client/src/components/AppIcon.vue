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
        <div class="items-center p-4 outline-1 bg-gray-700 rounded-xs outline-base-300 shadow-lg transition duration-300 hover:cursor-pointer hover:scale-105">
            <img :src="`/user-icon.png`" alt="App Icon" class="w-12 h-12 mx-auto">
            <p class="text-lg font-semibold text-center mt-2 overflow-hidden truncate">{{ props.title }}</p>
            <p class="text-sm text-center text-gray-400 overflow-hidden truncate">{{ props.category ? props.category : '-' }}</p>
        </div>
    </a>
</template>