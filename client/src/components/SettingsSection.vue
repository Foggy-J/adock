<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-200 rounded-lg shadow p-4">
        <div class="my-auto md:px-4">
            <h1 class="text-3xl font-bold">{{ props.title }}</h1>
            <p class="text-gray-500">{{ props.description }}</p>
        </div>
        <div class="p-4 bg-gray-300 rounded-lg shadow">
            <slot></slot>
        </div>
    </div>
</template>